import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import './Resume.css';

export default function BasicTimeline() {
  return (
    <div className=" app__bg app__wrapper section__padding" id="resume">
      <div className="app__resume">
        <h1 className="headtext__cormorant">Experience</h1>
      <div className="app__footer-links_experience">
      </div>
      <Timeline>
      <TimelineItem>
      <TimelineOppositeContent
      style={{ maxWidth: "200px", paddingLeft: '0px', paddingRight: '0px' }}
          align="right"
          variant="subtitle1"
          color="common.white"
          display="block"
        >
        20/03/2022 - 30/9/2023 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="common.white">
          Analyst programmer - Ambition Group Hong Kong Ltd
          </Typography>
          <Typography color="common.white">●	Working in Bank of East Asia</Typography>
          {/* <Typography backgroundColor = 'primary.main'color="common.white">●	Working in Bank of East Asia</Typography> */}
          <Typography color="common.white">●	Develop batch and Open API for corporate cyberbanking (java Spring)</Typography>
          <Typography color="common.white">●	Deployment change into AIX server placed in AWS.</Typography>
          <Typography color="common.white">●	Support L2, L3 in DEV, UAT and Production environment of Cyber Corporate System</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
      style={{ maxWidth: "200px", paddingLeft: '0px', paddingRight: '0px' }}
          align="right"
          variant="subtitle1"
          color="common.white"
          display="block"
        >
        11/01/2021 - 20/03/2022 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="common.white">
          Programmer - Transaction Technologies Limited
          </Typography>
          <Typography color="common.white">●	Working in Bank of East Asia</Typography>
          <Typography color="common.white">●	Implement logic in Java program for front office (FO) Stock trading system</Typography>
          <Typography color="common.white">●	Enhance order handle, risk checking functions in Java program</Typography>
          <Typography color="common.white">●	Participant in full development life cycle from system design, development to testing</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
      style={{ maxWidth: "200px", paddingLeft: '0px', paddingRight: '0px' }}
          align="right"
          variant="subtitle1"
          color="common.white"
          display="block"
        >
        05/02/2020 - 31/11/2020 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="common.white">
          Program tester - Infocean Technology Co Ltd
          </Typography>
          <Typography color="common.white">●	Writing test plan</Typography>
          <Typography color="common.white">●	UAT testing (insurance product)</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
      style={{ maxWidth: "200px", paddingLeft: '0px', paddingRight: '0px' }}
          align="right"
          variant="subtitle1"
          color="common.white"
          display="block"
        >
        11/01/2020 - 24/08/2020 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="common.white">
          Signals and Systems Course Tutor - City University of Hong Kong
          </Typography>
          <Typography color="common.white">●	Prepare lessons, assign and correct homework</Typography>
          <Typography color="common.white">●	Evaluate students progress and discuss the results with students</Typography>
          <Typography color="common.white">●	Work with students to improve their skills</Typography>
          <Typography color="common.white">●	Provide 1 on 1 support to students</Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
    <h1 className="headtext__cormorant">Education</h1>  
    <div className="app__footer-links_education">

      <TimelineItem>
      <TimelineOppositeContent
      style={{ maxWidth: "200px", paddingLeft: '0px', paddingRight: '0px' }}
          align="right"
          variant="subtitle1"
          color="common.white"
          display="block"
        >
        01/2021 of Completion 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="common.white">
          City University of Hong Kong
          </Typography>
          <Typography color="common.white">Bachelor of Engineering - Computer and Data Engineering</Typography>
          <Typography color="common.white">Honors: Upper Second-Class Honors</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent
      style={{ maxWidth: "200px", paddingLeft: '0px', paddingRight: '0px' }}
          align="right"
          variant="subtitle1"
          color="common.white"
          display="block"
        >
        08/2018 of Completion
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" color="common.white">
          Community College of City University
          </Typography>
          <Typography color="common.white">Associate degree: Associate of Engineering</Typography>
        </TimelineContent>
      </TimelineItem>
      </div>
    </div>


    </div>
    

  );
}