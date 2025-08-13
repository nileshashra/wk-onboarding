import React, { forwardRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { timelineData, moduleJourneyData } from '../constants';
import { BsBook, BsPersonVideo3, BsClock, BsDownload, BsBarChartSteps } from 'react-icons/bs';
import { DatedMilestone } from '../types';

type TimelineEventItem = DatedMilestone & {
    type: 'Training Module' | 'Live Session' | 'Office Hours';
};

type GanttEventItem = TimelineEventItem & {
    month: string;
};


const Timeline = forwardRef<HTMLDivElement>((_props, ref) => {
    
    const parseDate = (dateStr: string, month: string) => {
        const year = ['September', 'October', 'November', 'December'].includes(month) ? 2025 : 2026;
        const d = new Date(`${dateStr}, ${year}`);
        if (isNaN(d.getTime())) {
            console.error(`Invalid date created for: ${dateStr}, ${year}`);
            return new Date();
        }
        return d;
    };

    const handleDownloadCsv = () => {
        const headers = ['Date', 'Month', 'Year', 'Type', 'Title', 'Description'];
        let allEventsRows: string[][] = [];

        timelineData.forEach(monthData => {
            const monthEvents: TimelineEventItem[] = [];

            monthData.trainingModules.forEach(m => monthEvents.push({ ...m, type: 'Training Module' }));
            monthData.liveSessions.forEach(s => monthEvents.push({ ...s, type: 'Live Session' }));
            if (monthData.officeHours) {
                monthEvents.push({ ...monthData.officeHours, type: 'Office Hours' });
            }

            const sortedMonthEvents = monthEvents.sort((a, b) => parseDate(a.date, monthData.month).getTime() - parseDate(b.date, monthData.month).getTime());

            const rows = sortedMonthEvents.map(event => {
                let description = '';
                if (event.type === 'Training Module') {
                    const moduleDetails = moduleJourneyData.flatMap(c => c.modules).find(m => m.title === event.title);
                    if (moduleDetails) {
                        description = `"${moduleDetails.description.replace(/"/g, '""')}"`;
                    }
                }
                const title = `"${event.title.replace(/"/g, '""')}"`;
                const year = ['September', 'October', 'November', 'December'].includes(monthData.month) ? 2025 : 2026;
                return [event.date, monthData.month, year.toString(), event.type, title, description];
            });
            allEventsRows.push(...rows);
        });

        const csvContent = [
            headers.join(','),
            ...allEventsRows.map(row => row.join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'W+K_GenAI_Program_Schedule.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleDownloadGantt = () => {
        const startDate = new Date('2025-09-01');
        const endDate = new Date('2026-09-01');
        const totalDays = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    
        const getDaysFromStart = (date: Date) => (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    
        const allEvents: GanttEventItem[] = [];
        timelineData.forEach(monthData => {
            monthData.trainingModules.forEach(e => allEvents.push({ ...e, type: 'Training Module', month: monthData.month }));
            monthData.liveSessions.forEach(e => allEvents.push({ ...e, type: 'Live Session', month: monthData.month }));
            if (monthData.officeHours) {
                allEvents.push({ ...monthData.officeHours, type: 'Office Hours', month: monthData.month });
            }
        });
    
        allEvents.sort((a, b) => parseDate(a.date, a.month).getTime() - parseDate(b.date, b.month).getTime());

        const eventTypeColors: { [key: string]: string } = {
            'Training Module': '#FDE047',
            'Live Session': '#F87171',
            'Office Hours': '#60A5FA',
        };
    
        const monthHeaders = Array.from({ length: 12 }, (_, i) => {
            const d = new Date(2025, 8 + i, 1);
            return d.toLocaleString('default', { month: 'short' }) + ' \'' + d.getFullYear().toString().slice(-2);
        });
    
        const taskRowsHTML = allEvents.map(event => {
            const eventDate = parseDate(event.date, event.month);
            const days = getDaysFromStart(eventDate);
            if (days < 0 || days > totalDays) return '';
    
            const left = (days / totalDays) * 100;
            const color = eventTypeColors[event.type] || '#ccc';
    
            return `
                <div class="row">
                    <div class="row-label">
                        <div class="event-title">${event.title}</div>
                        <div class="event-date">${event.date}</div>
                    </div>
                    <div class="row-timeline">
                        <div class="bar" style="left: ${left}%; background-color: ${color};" title="${event.title} (${event.date})"></div>
                        <div class="timeline-grid">
                            ${Array.from({ length: 11 }).map(() => `<div class="grid-line"></div>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    
        const ganttHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Program Schedule Gantt Chart</title>
                <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #111; color: #fff; padding: 20px; }
                    .gantt-container { width: 100%; max-width: 1400px; margin: auto; border: 1px solid #444; border-radius: 8px; overflow: hidden; }
                    h1 { text-align: center; color: #FDE047; font-family: "Playfair Display", serif; }
                    .legend { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-bottom: 25px; font-size: 14px; }
                    .legend-item { display: flex; align-items: center; gap: 8px; }
                    .legend-color { width: 15px; height: 15px; border-radius: 3px; }
                    .header { display: grid; grid-template-columns: 280px 1fr; background-color: #1a1a1a; border-bottom: 1px solid #444; }
                    .header-label { font-weight: bold; padding: 10px 15px; }
                    .header-timeline { display: grid; grid-template-columns: repeat(12, 1fr); }
                    .month { text-align: center; font-size: 12px; color: #999; padding: 10px 0; border-left: 1px solid #333; }
                    .gantt-body { max-height: 70vh; overflow-y: auto; }
                    .row { display: grid; grid-template-columns: 280px 1fr; align-items: center; border-bottom: 1px solid #2a2a2a; }
                    .row:last-child { border-bottom: none; }
                    .row:hover { background-color: #222; }
                    .row-label { padding: 8px 15px; font-size: 13px; border-right: 1px solid #444; }
                    .event-title { font-weight: 500; color: #eee; }
                    .event-date { font-size: 11px; color: #888; }
                    .row-timeline { height: 40px; position: relative; }
                    .timeline-grid { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: grid; grid-template-columns: repeat(12, 1fr); pointer-events: none; }
                    .grid-line { border-right: 1px solid #333; }
                    .bar { position: absolute; width: 0.5%; min-width: 4px; height: 50%; top: 25%; border-radius: 3px; cursor: pointer; transition: transform 0.2s; box-shadow: 0 0 5px rgba(0,0,0,0.5); }
                    .bar:hover { transform: scale(1.5); z-index: 10; border: 1px solid white; }
                </style>
            </head>
            <body>
                <h1>W+K x OK Tomorrow GenAI Program</h1>
                <div class="legend">
                    ${Object.entries(eventTypeColors).map(([type, color]) => `
                        <div class="legend-item">
                            <div class="legend-color" style="background-color: ${color};"></div>
                            <span>${type}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="gantt-container">
                    <div class="header">
                        <div class="header-label">Event</div>
                        <div class="header-timeline">
                            ${monthHeaders.map(m => `<div class="month">${m}</div>`).join('')}
                        </div>
                    </div>
                    <div class="gantt-body">
                        ${taskRowsHTML}
                    </div>
                </div>
            </body>
            </html>
        `;

        const ganttWindow = window.open('', '_blank');
        if (ganttWindow) {
            ganttWindow.document.write(ganttHTML);
            ganttWindow.document.close();
        } else {
            alert("Please allow pop-ups for this site to view the Gantt chart.");
        }
    };
    
    const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
        'Training Module': BsBook,
        'Live Session': BsPersonVideo3,
        'Office Hours': BsClock,
    };

    return (
        <SectionWrapper ref={ref} id="timeline" title="12-Month Roadmap">
          <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-8">
            <div className="flex items-center text-sm"><BsBook className="w-4 h-4 mr-2 text-brand-yellow" /> Training Module</div>
            <div className="flex items-center text-sm"><BsPersonVideo3 className="w-4 h-4 mr-2 text-gray-400" /> Live Session</div>
            <div className="flex items-center text-sm"><BsClock className="w-4 h-4 mr-2 text-gray-400" /> Office Hours</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {timelineData.map(item => {
                const allEvents: TimelineEventItem[] = [];
                item.trainingModules.forEach(e => allEvents.push({...e, type: 'Training Module'}));
                item.liveSessions.forEach(e => allEvents.push({...e, type: 'Live Session'}));
                if (item.officeHours) {
                    allEvents.push({...item.officeHours, type: 'Office Hours'});
                }

                const sortedEvents = allEvents.sort((a, b) => parseDate(a.date, item.month).getTime() - parseDate(b.date, item.month).getTime());

                return (
                    <div key={item.month} className="bg-brand-gray rounded-lg p-5 flex flex-col">
                        <h3 className="font-bold text-lg text-brand-yellow mb-4">{item.month}</h3>
                        <div className="space-y-1 flex-grow">
                            {sortedEvents.map(event => {
                                const IconComponent = iconMap[event.type];
                                const isTrainingModule = event.type === 'Training Module';
                                return (
                                    <div 
                                        key={`${event.title}-${event.date}`} 
                                        className={`flex items-start text-sm rounded-md py-2 px-2 transition-colors ${
                                            isTrainingModule ? 'bg-brand-yellow/10' : ''
                                        }`}
                                    >
                                        <IconComponent 
                                            className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${
                                                isTrainingModule ? 'text-brand-yellow' : 'text-gray-400'
                                            }`} 
                                        />
                                        <div className="flex-grow">
                                            <span 
                                                className={`${isTrainingModule ? 'font-bold text-white' : 'text-gray-300'}`}
                                            >
                                                {event.title}
                                            </span>
                                            <span className="block text-xs text-gray-500">{event.date}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
          </div>
          <div className="flex justify-center flex-wrap gap-4 mt-12">
            <button
                onClick={handleDownloadCsv}
                className="bg-brand-yellow text-brand-black font-semibold py-2 px-5 rounded-md flex items-center gap-2 hover:bg-yellow-300 transition-colors shadow-lg"
            >
                <BsDownload className="w-5 h-5" />
                Download Schedule (CSV)
            </button>
            <button
                onClick={handleDownloadGantt}
                className="bg-brand-yellow text-brand-black font-semibold py-2 px-5 rounded-md flex items-center gap-2 hover:bg-yellow-300 transition-colors shadow-lg"
            >
                <BsBarChartSteps className="w-5 h-5" />
                View Schedule (Gantt)
            </button>
          </div>
        </SectionWrapper>
    );
});

Timeline.displayName = 'Timeline';

export default Timeline;