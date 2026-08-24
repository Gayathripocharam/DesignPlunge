import { useNavigate, Link } from 'react-router-dom';
import type { ServiceDetailData } from '../../types';
import { projects } from '../../../content/projects';
import { aiCapabilities, aiSystemFlow, aiNotForEverything, aiConceptMappings } from '../../../content/aiService';
import styles from './AiServiceDetail.module.css';

interface AiServiceDetailProps {
  data: ServiceDetailData;
}

function scrollToId(id?: string) {
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function AiServiceDetail({ data }: AiServiceDetailProps) {
  const navigate = useNavigate();
  const { id, index, title, subtitle, whenYouNeedIt, theProblem, whatWeDo, whatChanges, next } = data;

  const handleNextClick = () => {
    if (next.link) {
      navigate(next.link);
    } else if (next.targetId) {
      scrollToId(next.targetId);
    }
  };

  // Get the referenced concepts from projects.ts
  const concepts = aiConceptMappings.map(mapping => {
    const project = projects.find(p => p.slug === mapping.slug);
    return {
      mapping,
      project
    };
  }).filter(c => c.project);

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
          {/* P2.6 Editorial Narrative */}
          <div className={styles.editorialNarrative}>
            <div className={styles.narrativeBlock}>
              <h3 className={styles.mono}>When you need AI</h3>
              <p className={styles.contextText}>{whenYouNeedIt}</p>
            </div>
            
            <div className={styles.narrativeBlock}>
              <h3 className={styles.mono}>The problem</h3>
              <p className={styles.problemText}>{theProblem}</p>
            </div>

            <div className={styles.narrativeBlock}>
              <h3 className={styles.mono}>Where AI creates leverage</h3>
              <p className={styles.responseText}>{whatWeDo}</p>
            </div>
          </div>

          <div className={styles.matrixSection}>
            <div className={styles.sectionHead}>
              <h3 className={styles.mono}>What we build</h3>
            </div>
            <div className={styles.matrix}>
              {aiCapabilities.map((cap) => (
                <div key={cap.title} className={styles.matrixItem}>
                  <div className={styles.matrixHeader}>
                    <span className={styles.matrixTitle}>{cap.title}</span>
                    <span className={styles.matrixEvidence}>{cap.evidence}</span>
                  </div>
                  <div className={styles.matrixBody}>
                    <div className={styles.matrixField}>
                      <span className={styles.fieldLabel}>Problem</span>
                      <span className={styles.fieldVal}>{cap.problem}</span>
                    </div>
                    <div className={styles.matrixField}>
                      <span className={styles.fieldLabel}>AI Role</span>
                      <span className={styles.fieldVal}>{cap.role}</span>
                    </div>
                    <div className={styles.matrixField}>
                      <span className={styles.fieldLabel}>System</span>
                      <span className={styles.fieldVal}>{cap.systemComponents.join(' + ')}</span>
                    </div>
                    <div className={styles.matrixField}>
                      <span className={styles.fieldLabel}>Outcome</span>
                      <span className={styles.fieldValHighlight}>{cap.outcome}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.architectureSection}>
            <div className={styles.sectionHead}>
              <h3 className={styles.mono}>How the system works</h3>
            </div>
            <div className={styles.archFlow}>
              {aiSystemFlow.map((step, idx) => (
                <div key={step} className={styles.archStepWrapper}>
                  <div className={styles.archStep}>{step}</div>
                  {idx < aiSystemFlow.length - 1 && (
                    <div className={styles.archArrow}>
                      <i className="fa-regular fa-arrow-down" aria-hidden="true" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.warningSection}>
            <h3 className={styles.mono}>{aiNotForEverything.title}</h3>
            <p className={styles.responseText}>{aiNotForEverything.description}</p>
          </div>

          {concepts.length > 0 && (
            <div className={styles.conceptsSection}>
              <div className={styles.sectionHead}>
                <h3 className={styles.mono}>Selected product concepts</h3>
              </div>
              <div className={styles.conceptList}>
                {concepts.map(({ project, mapping }) => (
                  <Link to={`/work/${project!.slug}`} key={project!.slug} className={styles.conceptCard}>
                    <div className={styles.conceptImage}>
                      <img src={project!.image} alt={project!.title} loading="lazy" />
                    </div>
                    <div className={styles.conceptContent}>
                      <span className={styles.conceptTitle}>{project!.title}</span>
                      <ul className={styles.conceptCaps}>
                        {mapping.capabilitiesDemonstrated.map(cap => (
                          <li key={cap}><i className="fa-regular fa-check" aria-hidden="true" /> {cap}</li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className={styles.editorialNarrative}>
            <div className={styles.narrativeBlock}>
              <h3 className={styles.mono}>What changes</h3>
              <p className={styles.outcomeText}>{whatChanges}</p>
            </div>
          </div>
        </div>

        <div className={styles.sidebar}>
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
