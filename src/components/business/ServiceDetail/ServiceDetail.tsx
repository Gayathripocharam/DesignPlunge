import { useNavigate } from 'react-router-dom';
import type { ServiceDetailData } from '../../types';
import { ProcessRail } from '../ProcessRail/ProcessRail';
import styles from './ServiceDetail.module.css';

interface ServiceDetailProps {
  data: ServiceDetailData;
}

function scrollToId(id?: string) {
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function ServiceDetail({ data }: ServiceDetailProps) {
  const navigate = useNavigate();
  const { id, index, title, subtitle, flowLabel, flow, outputs, solve, get, bestFor, next } = data;

  const handleNextClick = () => {
    if (next.link) {
      navigate(next.link);
    } else if (next.targetId) {
      scrollToId(next.targetId);
    }
  };

  return (
    <section className={styles.serviceBlock} id={id}>
      <div className={styles.serviceHead}>
        <div className={styles.eyebrow}>
          <span className={styles.idx}>{index}</span>
        </div>
        <h2>{title}</h2>
        <p className={styles.serviceSub}>{subtitle}</p>
      </div>

      <div className={styles.serviceLayout}>
        <div className={styles.serviceMain}>
          {/* P2.5 Editorial Narrative */}
          <div className={styles.editorialNarrative}>
            <div className={styles.narrativeBlock}>
              <h3 className={styles.mono}>When you need us</h3>
              <p className={styles.contextText}>{data.whenYouNeedIt}</p>
            </div>
            <div className={styles.narrativeBlock}>
              <h3 className={styles.mono}>The problem</h3>
              <p className={styles.problemText}>{data.theProblem}</p>
            </div>
            <div className={styles.narrativeBlock}>
              <h3 className={styles.mono}>What we do</h3>
              <p className={styles.responseText}>{data.whatWeDo}</p>
            </div>
            <div className={styles.narrativeBlock}>
              <h3 className={styles.mono}>What changes</h3>
              <p className={styles.outcomeText}>{data.whatChanges}</p>
            </div>
          </div>

          <div className={styles.capabilitiesHeader}>
            <h3 className={styles.mono}>Capabilities</h3>
          </div>
          <ProcessRail stages={flow} size="compact" label={flowLabel} outputs={outputs} />

          <div className={styles.twoCol}>
            <div className={`${styles.infoCard} ${styles.solve}`}>
              <div className={styles.gridHeading}>
                <span className={styles.mono}>What we solve</span>
                <span className={styles.count}>{String(solve.length).padStart(2, '0')}</span>
              </div>
              {solve.map((item) => (
                <div className={styles.infoRow} key={item}>
                  <i className="fa-regular fa-circle-exclamation" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>

            <div className={`${styles.infoCard} ${styles.get}`}>
              <div className={styles.gridHeading}>
                <span className={styles.mono}>What you get</span>
                <span className={styles.count}>{String(get.length).padStart(2, '0')}</span>
              </div>
              {get.map((item) => (
                <div className={styles.infoRow} key={item}>
                  <i className="fa-regular fa-circle-check" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <span className={styles.mono}>Best for</span>
            <div className={styles.bestList}>
              {bestFor.map((item) => (
                <div className={styles.bestItem} key={item.name}>
                  <div className={styles.bestIcon}>
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <div className={styles.bestCopy}>
                    <span className={styles.bestName}>{item.name}</span>
                    <span className={styles.bestHint}>{item.hint}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={styles.exploreCard}
            role="button"
            tabIndex={0}
            onClick={handleNextClick}
            onKeyDown={(e) => e.key === 'Enter' && handleNextClick()}
          >
            <div className={styles.track}>
              {Array.from({ length: next.total }, (_, i) => {
                const step = i + 1;
                const cls = step < next.current ? styles.done : step === next.current ? styles.next : '';
                return <i key={step} className={cls} />;
              })}
            </div>
            <div className={styles.exploreTop}>
              <span className={styles.mono}>Next service</span>
              <span className={styles.exploreNum}>
                {String(next.current).padStart(2, '0')} / {String(next.total).padStart(2, '0')}
              </span>
            </div>
            <p className={styles.exploreTitle}>{next.title}</p>
            <div className={styles.exploreCta}>
              Explore service <i className="fa-regular fa-arrow-right" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
