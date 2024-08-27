import { useState } from 'react';
import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    const initialPrompt = <p>Please Select a topic</p>;
    const tabContent = <TabContent selectedTopic={selectedTopic}/>;
    const topics = ["Components","JSX","Props","State"];
    const tabButtons = topics.map((topic) =>
      <TabButton isSelected={selectedTopic === topic.toLowerCase()} onSelect={() => handleSelect(topic.toLowerCase())}>{topic}</TabButton>
    );
  
    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    return (
        <Section title="Examples" id="examples">
          <Tabs buttons={tabButtons}>
            {selectedTopic ? tabContent : initialPrompt}
          </Tabs>
        </Section>
    );
}

{/* <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton> */}