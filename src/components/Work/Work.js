import React from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import 'antd/lib/tabs/style/index.css'

const Work = (props) => {
  const { theme } = props

  const { TabPane } = Tabs

  return (
    <React.Fragment>
      <Tabs size="small" tabPosition="left">
        <TabPane
          tab={
            <div aria-label="Tab">
              <div>Speakfully</div>
            </div>
          }
          key="1"
        >
          <h3 className="jobTitle">Software Engineer</h3>
          <h3 className="duration">Aug 2020 - Present</h3>
          <p>
            <ul className="workList">
              <li>
                Collaborated with the CTO, CEO, Principal Software Engineer, & UI/UX Designer to
                deliver seamles web experiences
              </li>
              <li>
                Reworked and maintained full life-cycle development of the company website as the
                Lead Front End Software Engineer
              </li>
              <li>Created and imlemented multiple front end web experiences across web/mobile</li>
              <li>
                Built reusable components utilizing CMS/CRM integrations & various plugins to
                conditionally display sensitive data
              </li>
              {/* <li>
                Evaluate test automation tools, technology, and framework based on product
                requirements.
              </li>
              <li>
                Identify and implement strategies to leverage the testing life cycle and test tools
                to create reusable test assets.
              </li>
              <li>
                Identify potential risks in quality and work with leadership in creating mitigation
                plans.
              </li>
              <li>
                Assist in developing performance criteria and validating that products meet those
                performance requirements. Lead effort to assist performance testing.
              </li>
              <li>
                Debug, triage and provide guidance on support requests or converting to defects.
              </li>
              <li>Plan, execute, and complete system and regression testing.</li>
              <li>Plan hardware and software requirements for test environment setups.</li>
              <li>
                Resolve impediments related to quality by collaborating with cross-functional
                stakeholders.
              </li>
              <li>
                Provide cross-training and education to test, development and services personnel as
                required.
              </li>
              <li>
                Provide technical leadership, training, guidance, feedback, and coaching to QA
                engineers.
              </li>
              <li>
                Develop practices and implement tools to facilitate test-driven development with a
                high degree of test automation for highly scalable products.
              </li>
              <li>
                Suggest and implement process improvement plans, tracks progress, and achieves
                objectives.
              </li> */}
            </ul>
          </p>
        </TabPane>
        <TabPane
          tab={
            <div>
              <div>RentChirp</div>
            </div>
          }
          key="2"
        >
          <h3 className="jobTitle">Full Stack Developer(Internship)</h3>
          <h3 className="duration">Apr 2020 - Aug 2020</h3>
          <p>
            <ul className="workList">
              <li>Customize UI elements using Reactjs, HTML, CSS, & Javascript</li>
              <li>Perform bug fixes and code reviews</li>
            </ul>
          </p>
        </TabPane>
        <TabPane
          tab={
            <div>
              <div>PK Technology</div>
            </div>
          }
          key="3"
        >
          <h3 className="jobTitle">Associate Software Engineer</h3>
          <h3 className="duration">Nov 2019 - Jan 2020</h3>
          <p>
            <ul className="workList">
              <li>Agile/Scrum environment</li>
              <li>
                Collaborate and contribute in continuous integration/deployment to optimize front
                end styles on web and mobile(iOS)
              </li>
            </ul>
          </p>
        </TabPane>
      </Tabs>

      {/* --- STYLES --- */}
      <style jsx>{`
        .jobTitle {
          font-size: 1.2rem;
          line-height: 1.42857;
          font-weight: 600;
          margin-bottom: 2px;
        }
        .duration {
          font-size: 1rem;
          color: ${theme.color.neutral.gray.g};
          font-weight: 550;
        }
        .workList {
          list-style-type: disc;
          display: list-item;
        }
      `}</style>
    </React.Fragment>
  )
}

Work.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default Work
