import ColorsSelect from '../src/subcomponents/ColorsSelect';
import MultipleSelect from '../src/subcomponents/MultipleSelect';
import React from 'react';
import ReactSelectMaterialUi, { SelectOption } from '../src/ReactSelectMaterialUi';
import SingleSelect from '../src/subcomponents/SingleSelect';
import TagsSelect from '../src/subcomponents/TagsSelect';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 20
};

const simpleOptions: string[] = ["Option 1", "Option 2", "Option 3"];

const complexOptions: SelectOption[] = [
  {
    label: "Option 1",
    value: "Value 1"
  },
  {
    label: "Option 2",
    value: "Value 2"
  },
  {
    label: "Option 3",
    value: "Value 3"
  }
];

const tagOptions: string[] = ["Tag1", "Tag2", "tag3"];

const colorOptions: string[] = ["red", "blue", "#13579a"];

const customMessages = {
  msgNoOptionsAvailable: "You already used all options",
  msgNoOptionsMatchFilter: "No match. Sorry",
  msgNoValidValue: "Try 'Hello'"
};

const option2value = option => option.value;

const formatCreateLabel = (value: string) => `${value} (New Label)`;

const isValidNewOption = (inputValue: string) => inputValue === "Hello";

const doNothing = () => {};

const showSelectedValue = (id: string) => (value: string) =>
  (document.getElementById(id).textContent = value);

storiesOf("ReactSelectMaterialUi", module)
  .add("with and without fullWidth set", () => (
    <div>
      <ReactSelectMaterialUi
        label="Without fullWith"
        options={simpleOptions}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="With fullWith"
        options={simpleOptions}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("single and multiple select - not allowing creating ew options", () => (
    <div>
      <ReactSelectMaterialUi
        label="Single select"
        options={simpleOptions}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={simpleOptions}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("single and multiple select - allowing creating new options", () => (
    <div>
      <ReactSelectMaterialUi
        label="Single select"
        options={simpleOptions}
        SelectProps={{ isCreatable: true }}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={simpleOptions}
        SelectProps={{ isCreatable: true, isMulti: true }}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("with options having label and value equal", () => (
    <div>
      <ReactSelectMaterialUi
        label="Options having label and value equal"
        options={simpleOptions}
        fullWidth={true}
        onChange={showSelectedValue("ohlve")}
      />
      <div style={style} />
      Selected value: <span id="ohlve"></span>
    </div>
  ))
  .add("with options having label and value different", () => (
    <div>
      <ReactSelectMaterialUi
        label="Options having label and value different"
        options={complexOptions}
        fullWidth={true}
        onChange={showSelectedValue("ohlvd")}
      />
      <div style={style} />
      Selected value: <span id="ohlvd"></span>
    </div>
  ))
  .add("clearable and not clearable", () => (
    <div>
      <ReactSelectMaterialUi
        label="Clearable - Single select"
        options={simpleOptions}
        SelectProps={{ isClearable: true }}
        fullWidth={true}
        onChange={showSelectedValue("cnc")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Not clearable - Single select"
        options={simpleOptions}
        SelectProps={{ isClearable: false }}
        fullWidth={true}
        onChange={showSelectedValue("cnc")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Clearable - Multiple select"
        options={simpleOptions}
        SelectProps={{ isClearable: true, isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("cnc")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Not clearable - Multiple select"
        options={simpleOptions}
        SelectProps={{ isClearable: false, isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("cnc")}
      />
      <div style={style} />
      Selected value: <span id="cnc"></span>
    </div>
  ))
  .add("with defaultValue", () => (
    <div>
      <ReactSelectMaterialUi
        label="Default value - Label and value equal - Single select"
        options={simpleOptions}
        defaultValue={simpleOptions[1]}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Default value - Label and value different - Single select"
        options={complexOptions}
        defaultValue={complexOptions[1].value}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Default value - Label and value equal - Multiple select"
        options={simpleOptions}
        defaultValue={simpleOptions.slice(1, 3)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Default value - Label and value different - Multiple select"
        options={complexOptions}
        defaultValue={complexOptions.slice(1, 3).map(option2value)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      Selected value: <span id="dv"></span>
    </div>
  ))
  .add("with value", () => (
    <div>
      <ReactSelectMaterialUi
        label="Value - Label and value equal - Single select"
        options={simpleOptions}
        value={simpleOptions[1]}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Value - Label and value different - Single select"
        options={complexOptions}
        value={complexOptions[1].value}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Value - Label and value equal - Multiple select"
        options={simpleOptions}
        value={simpleOptions.slice(1, 3)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Value - Label and value different - Multiple select"
        options={complexOptions}
        value={complexOptions.slice(1, 3).map(option2value)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      Selected value: <span id="v"></span>
    </div>
  ))
  .add("with and without helper text", () => (
    <div>
      <ReactSelectMaterialUi
        label="With helper text"
        options={simpleOptions}
        helperText="Please select Option 2"
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Without helper text"
        options={simpleOptions}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("with customized messages", () => (
    <div>
      <ReactSelectMaterialUi
        label="Messages when you cannot create new options"
        options={simpleOptions}
        SelectProps={{ ...customMessages, isMulti: true }}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Messages when you can create new options"
        options={simpleOptions}
        SelectProps={{ ...customMessages, formatCreateLabel, isValidNewOption, isCreatable: true, isMulti: true }}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ));

storiesOf("Subcomponents", module)
  .add("SingleSelect", () => (
    <div>
      <SingleSelect
        label="Not allowing a new value"
        options={simpleOptions}
        onChange={showSelectedValue("ss")}
      />
      <div style={style} />
      <SingleSelect
        label="Allowing a new value"
        options={simpleOptions}
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue("ss")}
      />
      <div style={style} />
      Selected value: <span id="ss"></span>
    </div>
  ))
  .add("MultipleSelect", () => (
    <div>
      <MultipleSelect
        label="Not allowing a new value"
        options={simpleOptions}
        onChange={showSelectedValue("ms")}
      />
      <div style={style} />
      <MultipleSelect
        label="Allowing a new value"
        options={simpleOptions}
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue("ms")}
      />
      <div style={style} />
      Selected value: <span id="ms"></span>
    </div>
  ))
  .add("TagsSelect", () => (
    <div>
      <TagsSelect
        label="Not allowing a new tag"
        options={tagOptions}
        onChange={showSelectedValue("ts")}
      />
      <div style={style} />
      <TagsSelect
        label="Allowing a new tag"
        options={tagOptions}
        helperText="Try without space"
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue("ts")}
      />
      <div style={style} />
      Selected value: <span id="ts"></span>
    </div>
  ))
  .add("ColorsSelect", () => (
    <div>
      <ColorsSelect
        label="Not allowing a new color"
        options={colorOptions}
        onChange={showSelectedValue("cs")}
      />
      <div style={style} />
      <ColorsSelect
        label="Allowing a new color"
        options={colorOptions}
        helperText="Try 'aqua'"
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue("cs")}
      />
      <div style={style} />
      Selected value: <span id="cs"></span>
    </div>
  ));
