// import Highlight from '@site/src/components/Highlight';
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

import Demo from '@site/src/components/Demo';
import Card from '@site/src/components/Card';
import CardGroup from '@site/src/components/CardGroup';
import CodeGroup from '@site/src/components/CodeGroup';
import Frame from '@site/src/components/Frame';
import Note from '@site/src/components/Note';
// import Tab from '@site/src/components/Tab';
import {Tab} from '@headlessui/react';
import Tabs from '@site/src/components/Tabs';
import Warning from '@site/src/components/Warning';
import Accordion from '@site/src/components/Accordion';
import AccordionGroup from '@site/src/components/AccordionGroup';
import Step from '@site/src/components/Step';
import Steps from '@site/src/components/Steps';
import Tip from '@site/src/components/Tip';
import Info from '@site/src/components/Info';
import Tooltip from '@site/src/components/Tooltip';
// import { Tip } from '@mintlify/components';

// import { Frame } from '@mintlify/components';
export default {
      ...MDXComponents,
    Card,
    CardGroup,
    CodeGroup,
    Frame,
    Note,
    Tab,
    Step,
    Tabs,
    Warning,
    Tooltip,
    Steps,
    Info,
    Accordion,
    AccordionGroup,
    Tip,
    Demo
}