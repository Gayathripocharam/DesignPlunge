import { LayoutDashboard, Code, Brain, Layers, PenTool, LineChart, ShieldCheck, Cpu, Workflow, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'layout-dashboard': LayoutDashboard,
  'code': Code,
  'brain': Brain,
  'layers': Layers,
  'pen-tool': PenTool,
  'line-chart': LineChart,
  'shield-check': ShieldCheck,
  'cpu': Cpu,
  'workflow': Workflow,
  'palette': Palette,
};

export function getIcon(name: string): LucideIcon | undefined {
  return iconMap[name];
}

export default iconMap;
