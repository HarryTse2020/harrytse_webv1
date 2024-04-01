import images from './images';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { GiPoliceBadge } from "react-icons/gi";


const awards = [
  {
    imgUrl: images.javaicon,
    title: 'Java',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.pythonicon,
    title: 'Python',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.fluttericon,
    title: 'Flutter',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.reacticon,
    title: 'React JS',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const award2 = [
  {
    imgUrl: images.databaseicon,
    title: 'DB2, Oracle DB & MYSQL',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.linuxicon,
    title: 'Bash, Ash & sh',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.gitlabicon,
    title: 'GIT & Gitlab',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.awsicon,
    title: 'AWS & Alicloud',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { awards, award2 };
