import React from "react";
import styled from "styled-components";
import { Input } from "../../../../components/forms";

export default function EditGigInfo({ onChange2, formdata2, setFormData2 }) {
  const inputData1 = [
    {
      id: 1,
      name: "title",
      placeholder: "Add your gig title",
      type: "text",
      text: "Gig Title",
    },
  ];

  return (
    <EditGigInfoWrapper>
      <div className="EditGigForm">
        <div className="EditGigFormBottom">
          {inputData1.slice(0, 1).map((input) => {
            return (
              <Input
                id={input.text}
                onChange={onChange2}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                value={formdata2[input.name]}
                input={input}
                key={input.id}
                required={input.required}
                pattern={input.pattern}
                errorMessage={input.errorMessage}
              />
            );
          })}
          <label htmlFor="text" className="textLabel">
            Gig description
            <textarea
              type="text"
              className="textarea"
              placeholder="Place a description on the gig"
              name="description"
              value={formdata2.description}
              onChange={onChange2}
              id="text"
            />
          </label>
          <label htmlFor="text" className="textLabel">
            Gig shortdescription
            <textarea
              type="text"
              className="textarea"
              placeholder="Place a shortdescription on the gig"
              name="shortdescription"
              value={formdata2.shortdescription}
              onChange={onChange2}
              id="text"
            />
          </label>

          {inputData1.slice(1, 2).map((input) => {
            return (
              <Input
                id={input.text}
                onChange={onChange2}
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
                value={formdata2[input.name]}
                input={input}
                key={input.id}
                required={input.required}
                pattern={input.pattern}
                errorMessage={input.errorMessage}
              />
            );
          })}
        </div>
      </div>
    </EditGigInfoWrapper>
  );
}

const EditGigInfoWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
  .EditGigFormBottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: 1rem 0;
  }
`;
