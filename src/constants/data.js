import images from './images';

const awards = [
  {
    imgUrl: images.javaicon,
    title: 'Java (Core & Spring Boot)',
    subtitle: 'Build the application backend including API, Database connection.'
  },
  {
    imgUrl: images.pythonicon,
    title: 'Python',
    subtitle: 'Develop machine learning project like stock price predication.',
  },
  {
    imgUrl: images.fluttericon,
    title: 'Flutter',
    subtitle: 'Build modern mobile application for IOS and Andoid.',
  },
  {
    imgUrl: images.reacticon,
    title: 'React JS',
    subtitle: 'Develop modern web application and complex user interfaces.',
  },
];

const award2 = [
  {
    imgUrl: images.databaseicon,
    title: 'Oracle DB & MYSQL',
    subtitle: 'Use as Database to store the data in a efficient way.',
  },
  {
    imgUrl: images.linuxicon,
    title: 'Bash, Ash & sh',
    subtitle: 'use as control and monitor the linux/unix server.',
  },
  {
    imgUrl: images.gitlabicon,
    title: 'GIT & Gitlab',
    subtitle: 'use as source control and CI/CD to work with other developers.',
  },
  {
    imgUrl: images.awsicon,
    title: 'AWS & Alicloud',
    subtitle: 'Host software from cloud platform for easier monitor and maintenance.',
  },
];

export default { awards, award2 };
