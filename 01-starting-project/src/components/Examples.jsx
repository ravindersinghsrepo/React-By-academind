import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples(){

 const [selectedTopic , setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
  }
  let tabContent = <p>Please select Content</p>;
  if(selectedTopic){
    tabContent = (
      <div className="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
      </div>
    )
  }
    return(
        <Section title="Examples" id='examples'>
            <Tabs
            buttonContainer='menu'
            buttons={
                <>
                <TabButton isSelected={selectedTopic=='components'?'active':''} onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic =='jsx'?'active':''} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic =='props'?'active':''} onSelect={()=>handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic=='state' ?'active':''} onSelect={()=>handleSelect('state')}>State</TabButton>
                </>
            }
            >
                {tabContent}
            </Tabs>
        </Section>
    )
}