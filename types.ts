import React from 'react';

export interface Touchpoint {
  title: string;
  description: string;
  format: string;
  audience: string;
  cadence: string;
}

export interface Module {
  title: string;
  description: string;
}

export interface ModuleCategory {
  category: string;
  purpose: string;
  modules: Module[];
}

export interface DatedMilestone {
  title: string;
  date: string;
}

export interface TimelineEvent {
  month: string;
  trainingModules: DatedMilestone[];
  liveSessions: DatedMilestone[];
  officeHours?: DatedMilestone;
}

export interface Metric {
  category: string;
  kpis: string[];
  target: string;
}
