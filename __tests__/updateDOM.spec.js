import {describe, test, expect} from "vitest";
import {updateRecipesList, updateTagList} from "../scripts/utilities/updateDOM.js";

describe("When the function", () => {
  describe("updateTagList is calling", () => {
    test("it should update an ul element whith a list of tags", () => {
      const ulElement = document.createElement("ul");
      ulElement.id = "tag-list";
      const tagsList = ["tag1", "tag2", "tag3"];
      updateTagList(ulElement, tagsList);
      const liElements = ulElement.querySelectorAll("li");
      expect(liElements.length).toBe(3);
      expect(liElements[0].innerText).toBe("tag1");
      expect(liElements[1].innerText).toBe("tag2");
      expect(liElements[2].innerText).toBe("tag3");
    });
  })
})