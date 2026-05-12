'use client'

import type { JSX } from 'react'
import { dataShowcase } from '@/data/data-engineering'

export function DataEngineering(): JSX.Element {
  return (
    <section id="pipelines">
      <div className="container">
        <div className="section-tag">06 / pipelines</div>
        <h2 className="section-title">// systems I&apos;ve <span className="accent">engineered</span></h2>
        <p className="section-sub">
          Three production pipelines — query routing, ML orchestration, and workflow automation.
        </p>

        {dataShowcase.map((block, i) => (
          <div key={block.id} className="de-block">
            <div className="de-head">
              <h4>{block.title}</h4>
              <span className="idx">PIPELINE_0{i + 1}</span>
            </div>

            <div className="pipeline">
              {block.pipelineSteps.map((step, j) => (
                <span key={j}>
                  <span className="step">{step}</span>
                  {j < block.pipelineSteps.length - 1 && (
                    <span className="arrow">→</span>
                  )}
                </span>
              ))}
            </div>

            <div className="de-stats">
              {block.stats.map(({ label, value }) => (
                <div key={label} className="s">
                  {label}: <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div className="de-tools">
              {block.tools.map(tool => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
