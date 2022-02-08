import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, ListItem, UnorderedList } from '@chakra-ui/react';

import styles from '../../styles/ResumeTimeline.module.css'

const ResumeTimeline = () => {
  return (
      <Center  marginBottom='100px'>
          <ul className={styles.timeline}>
            <li>
                <div className={styles.directionr}>
                    <div className={styles.flagwrapper}>
                        <span className={styles.flag}>Corcentric, LLC, Associate Director-Strategic Sourcing</span>
                        <span className={styles.timewrapper}><span className={styles.time}>Feb. 2020 - present</span></span>
                    </div>
                    <div className={styles.desc}>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            Details
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <UnorderedList fontFamily='Montserrat' textAlign='left'>
                                        <ListItem>
                                            Manage multiple client-facing teams simultaneously and proactively engage with all levels of management to ensure revenue
targets are achieved
                                        </ListItem>
                                        <ListItem>Lead the direct materials practice group and establish best practices across the wider consulting organization, including:
strategy planning guides, sales/thought leadership collateral, and a centralized market intelligence database
                                        </ListItem>
                                        <ListItem>Grow the Corcentric client base by owning the full sales cycle for new clients from scoping to contract negotiation
                                        </ListItem>
                                        <ListItem>Work with senior leadership to develop the strategic plan for the consulting group outlining: revenue targets, resource
planning, and overarching strategic initiatives
                                        </ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </li>
            <li>
                <div className={styles.directionl}>
                    <div className={styles.flagwrapper}>
                        <span className={styles.flag}>Boston Scientific, Corp, Senior Buyer</span>
                        <span className={styles.timewrapper}><span className={styles.time}>Mar. 2019 - Jan. 2020</span></span>
                    </div>
                    <div className={styles.desc}>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            Details
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <UnorderedList fontFamily='Montserrat' textAlign='left'>
                                        <ListItem  >
                                        Headed the implementation and integration of Rapid Response supply chain software across Boston Scientific globally; SME
for procurement data analysis and reporting
                                        </ListItem>
                                        <ListItem>Manage team of three buyers to drive results in the plastics and electronics categories including but not limited to: inventory
position and alignment, supplier engagement, price variance, and engineering improvement incorporation
                                        </ListItem>
                                        <ListItem>Created detailed strategic supplier exit model used to drive six workstreams with projected exit two years earlier than
precedent
                                        </ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </li>
            <li>
                <div className={styles.directionr}>
                    <div className={styles.flagwrapper}>
                        <span className={styles.flag}>Rolls-Royce, Corp, Strategic Buyer</span>
                        <span className={styles.timewrapper}><span className={styles.time}>Oct. 2016 - Mar. 2019</span></span>
                    </div>
                    <div className={styles.desc}>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            Details
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <UnorderedList fontFamily='Montserrat' textAlign='left'>
                                        <ListItem>
                                        Lead negotiator between Rolls-Royce and first-tier supply base; total portfolio valued at +$225 million with accountability
for: structures, transmissions, control systems and raw material sub-commodities for R-R Defense programs
                                        </ListItem>
                                        <ListItem>Developed a week-long sourcing conference that yielded a +30% reduction in gearbox engine-set-value across three civil-
large platforms while adhering to the sourcing strategy
                                        </ListItem>
                                        <ListItem>Transformed Defense Procurement contracting process; streamlined approval processes and reinvented procurement business
modeling tools to improve long-term-agreement results and reduce signature lead times
                                        </ListItem>
                                        <ListItem>Formed the sourcing strategy for a critical Defense program as well as nickel castings; of which, both have been implemented
in the structures and transmissions commodity groups
                                        </ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </li>
            <li>
                <div className={styles.directionl}>
                    <div className={styles.flagwrapper}>
                        <span className={styles.flag}>Rolls-Royce, Corp, Contracts Buyer</span>
                        <span className={styles.timewrapper}><span className={styles.time}>Aug. 2014 - Oct. 2016</span></span>
                    </div>
                    <div className={styles.desc}>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            Details
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <UnorderedList fontFamily='Montserrat' textAlign='left'>
                                        <ListItem>
                                        Facilitated negotiations on a Long-Term Agreement between Rolls-Royce and a foreign sub-tier supplier valued at over $70
million; the overall deal beat internal and external stakeholder expectations with year-over-year cost reductions
                                        </ListItem>
                                        <ListItem>Manage commercial aspects of 8 sub-tier suppliers, with a combined yearly spend of $25 million, including: creating and
maintaining purchase orders, issuing RFQs, and awarding business in accordance with FAR/DFAR and internal regulations
                                        </ListItem>
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </li>
            </ul>
      </Center>
  )
};

export default ResumeTimeline;
