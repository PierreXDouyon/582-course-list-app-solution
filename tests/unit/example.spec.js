import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

import CourseItem from "@/components/CourseItem.vue";

it("renders props.course when passed", () => { 
  const course = {
  name: "CourseItem",
  props: {
    course: {
      type: Object,
      default() {
        return {
          id: 0,
          name: "Course Name",
          credits: 0,
          hours: 0,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium modi adipisci rem architecto sequi atque mollitia voluptates magnam assumenda at reiciendis aliquid, iusto ab debitis quibusdam molestiae quas commodi?",
          location: "online",
          enrollment: 0,
        };
      },
    },
  },
};
  const wrapper = shallowMount(CourseItem, {
    props: { course },
  });
  expect(wrapper.text()).toMatch(course.name);
});


it("shows the button when the course is not added", () => {
  const wrapper = shallowMount(CourseItem);
  const data = {  data() {
    return {
      isAdded: false,
    };
  },
};
  const buttonText = "Add Course";
 
  expect (wrapper.find("[data-testid='add']").text()).toBe(buttonText);

});

// it("emits an action when the button is clicked", async () => {
//   const wrapper = shallowMount(CourseItem);
//   await wrapper.find("[data-testid='add']").trigger("click");
//   expect(wrapper.emitted().sendAdd).toBeTruthy();
//   console.log(wrapper.emitted().sendAdd);
//   expect(wrapper.emitted().sendAdd[0][0]).toEqual(true);
// });

