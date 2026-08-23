import React from "react";
import { LayoutDashboard, Users, BarChart3, Settings } from "lucide-react";
import styles from "./VisualMetaphors.module.css";

export type VisualMetaphorType = "digital-products" | "web-applications" | "ai-systems" | "design-systems";

interface VisualMetaphorProps {
  type: VisualMetaphorType;
}

export const VisualMetaphor: React.FC<VisualMetaphorProps> = ({ type }) => {
  switch (type) {
    case "digital-products":
      return (
        <div className={`${styles.visualDigital} ${styles.visualCard}`} aria-hidden="true">
          <div className={styles.dpSidebar}>
            <div className={styles.dpSidebarIcon} data-active>
              <LayoutDashboard size={20} strokeWidth={2} />
            </div>
            <div className={styles.dpSidebarIcon}>
              <Users size={20} strokeWidth={1.5} />
            </div>
            <div className={styles.dpSidebarIcon}>
              <BarChart3 size={20} strokeWidth={1.5} />
            </div>
            <div style={{ flex: 1 }} />
            <div className={styles.dpSidebarIcon}>
              <Settings size={20} strokeWidth={1.5} />
            </div>
          </div>
          <div className={styles.dpMain}>
            <div className={styles.dpHeader}>
              <span className={styles.visualLabel}>PRODUCT SYSTEM</span>
              <div className={styles.dpDots}>
                <span className={styles.dpDot} />
                <span className={styles.dpDot} />
                <span className={styles.dpDot} />
              </div>
            </div>
            
            <div className={styles.dpMetricsArea}>
              <div className={styles.dpMetricCard}>
                <div className={styles.dpMetric}>
                  <span className={styles.visualLabel}>USERS</span>
                  <span className={styles.dpValue}>12.4K</span>
                </div>
                <div className={styles.dpChart}>
                  <svg viewBox="0 0 100 24" className={styles.dpChartSvg} preserveAspectRatio="none">
                    <polyline points="0,20 20,15 40,18 60,10 80,12 100,2" fill="none" stroke="var(--accent)" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className={styles.dpMetricCard}>
                <div className={styles.dpMetric}>
                  <span className={styles.visualLabel}>REVENUE</span>
                  <span className={styles.dpValue}>$84K</span>
                </div>
                <div className={styles.dpChart}>
                  <svg viewBox="0 0 100 24" className={styles.dpChartSvg} preserveAspectRatio="none">
                    <polyline points="0,20 20,15 40,18 60,10 80,12 100,2" fill="none" stroke="var(--accent)" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className={styles.dpMetricCard}>
                <div className={styles.dpMetric}>
                  <span className={styles.visualLabel}>GROWTH</span>
                  <span className={styles.dpValueAccent}>+23%</span>
                </div>
                <div className={styles.dpChart}>
                  <svg viewBox="0 0 100 24" className={styles.dpChartSvg} preserveAspectRatio="none">
                    <polyline points="0,20 20,15 40,18 60,10 80,12 100,2" fill="none" stroke="var(--accent)" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.dpRoadmapArea}>
              <span className={styles.visualLabel}>PRODUCT ROADMAP</span>
              <div className={styles.dpRoadmapGrid}>
                <div className={styles.dpRoadmapStep}>
                  <div className={styles.dpStepHeader}>
                    <div className={styles.dpStepNumber}>01</div>
                    <span className={styles.dpStepTitle}>Strategy</span>
                  </div>
                  <span className={styles.dpStepDesc}>Define goals</span>
                </div>
                <div className={styles.dpRoadmapStep}>
                  <div className={styles.dpStepHeader}>
                    <div className={styles.dpStepNumber}>02</div>
                    <span className={styles.dpStepTitle}>Design</span>
                  </div>
                  <span className={styles.dpStepDesc}>User experience</span>
                </div>
                <div className={styles.dpRoadmapStep}>
                  <div className={styles.dpStepHeader}>
                    <div className={styles.dpStepNumber}>03</div>
                    <span className={styles.dpStepTitle}>Engineering</span>
                  </div>
                  <span className={styles.dpStepDesc}>Technical build</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "web-applications":
      return (
        <div className={`${styles.visualWeb} ${styles.visualCard}`} aria-hidden="true">
          <div className={styles.waChromeBar}>
            <div className={styles.waDots}>
              <span className={styles.waDot} />
              <span className={styles.waDot} />
              <span className={styles.waDot} />
            </div>
            <div className={styles.visualLabel}>APPLICATION</div>
            <div className={styles.waSpacer} />
          </div>
          <div className={styles.waBody}>
            <div className={styles.waSidebar}>
              <div className={styles.waNavLabel} data-active>Dashboard</div>
              <div className={styles.waNavLabel}>Projects</div>
              <div className={styles.waNavLabel}>Users</div>
              <div className={styles.waNavLabel}>Analytics</div>
              <div style={{ flex: 1 }} />
              <div className={styles.waNavLabel}>Settings</div>
            </div>
            <div className={styles.waContent}>
              <div className={styles.visualTitle} style={{ marginBottom: "24px" }}>Dashboard Overview</div>
              <div className={styles.waCardRow}>
                <div className={styles.waSmallCard}>
                  <div className={styles.dpMetric}>
                    <span className={styles.visualLabel} style={{ textAlign: "center" }}>ACTIVE</span>
                    <span className={styles.dpValue}>247</span>
                  </div>
                </div>
                <div className={styles.waSmallCard}>
                  <div className={styles.dpMetric}>
                    <span className={styles.visualLabel} style={{ textAlign: "center" }}>COMPLETED</span>
                    <span className={styles.dpValue}>1.2K</span>
                  </div>
                </div>
                <div className={styles.waSmallCard}>
                  <div className={styles.dpMetric}>
                    <span className={styles.visualLabel} style={{ textAlign: "center" }}>PENDING</span>
                    <span className={styles.dpValue}>38</span>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1 }} />
              <div className={styles.waChart}>
                <svg viewBox="0 0 300 80" className={styles.dpChartSvg} preserveAspectRatio="none">
                  <polyline points="0,60 30,50 60,55 90,30 120,40 150,20 180,35 210,15 240,25 270,10 300,18" fill="none" stroke="var(--accent)" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      );
    case "ai-systems":
      return (
        <div className={styles.visualAI} aria-hidden="true">
          <div className={styles.aiNodeBox}>
            <span className={styles.visualLabel}>INPUT</span>
            <ul className={styles.aiList}>
              <li>data</li>
              <li>context</li>
              <li>request</li>
            </ul>
          </div>
          <div className={styles.aiArrow}>&rarr;</div>
          <div className={`${styles.aiNodeBox} ${styles.aiNodeAccent}`}>
            <span className={styles.visualLabel} style={{ color: "var(--text)" }}>AI ENGINE</span>
            <ul className={styles.aiList}>
              <li>reasoning</li>
              <li>retrieval</li>
              <li>generation</li>
            </ul>
            <div className={styles.aiProcessingDots} style={{ marginTop: 8 }}>
              <span className={styles.aiPulseDot} />
            </div>
          </div>
          <div className={styles.aiArrow}>&rarr;</div>
          <div className={styles.aiNodeBox}>
            <span className={styles.visualLabel}>OUTPUT</span>
            <ul className={styles.aiList}>
              <li>response</li>
              <li>action</li>
              <li>automation</li>
            </ul>
          </div>
        </div>
      );
    case "design-systems":
    default:
      return (
        <div className={styles.visualDesign} aria-hidden="true">
          <div className={styles.dsNodeBox}>
            <span className={styles.visualLabel}>TOKENS</span>
          </div>
          <div className={styles.dsArrow}>&darr;</div>
          <div className={styles.dsNodeBox}>
            <span className={styles.visualLabel}>COMPONENTS</span>
          </div>
          <div className={styles.dsArrow}>&darr;</div>
          <div className={styles.dsNodeBox}>
            <span className={styles.visualLabel}>PATTERNS</span>
          </div>
          <div className={styles.dsArrow}>&darr;</div>
          <div className={styles.dsNodeBox} style={{ borderColor: "var(--accent)" }}>
            <span className={styles.visualLabel} style={{ color: "var(--accent)" }}>PRODUCT UI</span>
          </div>
        </div>
      );
  }
};
