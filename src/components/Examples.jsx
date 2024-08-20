import { useState } from 'react';
import TabButton from './TabButton.jsx';
import TabContent from './TabContent.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    const initialPrompt = <p>Please Select a topic</p>;
    const tabContent = <TabContent selectedTopic={selectedTopic}/>;
  
    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    return (
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic ? tabContent : initialPrompt}
        </section>
    );
}