export interface RailStage {
  icon: string; // font-awesome class, e.g. "fa-regular fa-flag"
  title: string;
  desc: string;
}

export interface Capability {
  num: string;
  icon: string;
  title: string;
  tags: string[];
  targetId?: string;
}

export interface BestForItem {
  icon: string;
  name: string;
  hint: string;
}

export interface NextService {
  current: number;
  total: number;
  title: string;
  targetId?: string;
  link?: string;
}

export interface ServiceDetailData {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  whenYouNeedIt: string;
  theProblem: string;
  whatWeDo: string;
  whatChanges: string;
  flowLabel: string;
  flow: RailStage[];
  outputs?: string[];
  solve: string[];
  get: string[];
  bestFor: BestForItem[];
  next: NextService;
}
