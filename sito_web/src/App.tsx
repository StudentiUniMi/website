import React from 'react';
import './App.css';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { PivotItem, IPivotItemProps, Pivot } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';


// Qui attacchi tutti i componenti che crei

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

function App() {
  return (
    <div>
      <Pivot aria-label="Count and Icon Pivot Example">
        <PivotItem headerText="My Files" itemCount={42} itemIcon="Emoji2">
          <Label styles={labelStyles}>export default PrimoComponente;</Label>
        </PivotItem>
        <PivotItem itemCount={23} itemIcon="Recent">
          <Label styles={labelStyles}>Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText="Placeholder" itemIcon="Globe">
          <Label styles={labelStyles}>Pivot #3</Label>
        </PivotItem>
        <PivotItem headerText="Shared with me" itemIcon="Ringer" itemCount={1}>
          <Label styles={labelStyles}>Pivot #4</Label>
        </PivotItem>
        <PivotItem headerText="Customized Rendering" itemIcon="Globe" itemCount={10}>
          <Label styles={labelStyles}>Customized Rendering</Label>
        </PivotItem>
      </Pivot>
    </div>
  );
}


export default App;
