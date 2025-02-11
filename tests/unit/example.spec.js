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
 
};
  const wrapper = shallowMount(CourseItem);
  expect(wrapper.find("[data-testid='course-name']").text()).toBe("Course Name");
});



it("shows the add course button when the course is not added", () => {
  const wrapper = shallowMount(CourseItem);
  const data = {
    data() {
      return {
        isAdded: false,
      };
    },
  };
  const buttonText = "Add Course";

  expect(wrapper.find("[data-testid='add']").text()).toBe(buttonText);
});


it("shows the add course button when the course is not full", () => {
  const wrapper = shallowMount(CourseItem);

  const buttonText = "Add Course";

  expect(wrapper.find("[data-testid='add']").text()).toBe(buttonText);
});


it("hides the remove course button when the course is not added", async () => {
  const buttonText = "Remove Course";
  const wrapper = shallowMount(CourseItem);

  await wrapper.setData({ isAdded: false });
  expect(wrapper.find("[data-testid='remove']").exists()).toBe(false);
});


it("hides the add course button when the course enrollment is full", async () => {
  const course = {
    name: "Python",
    description:
      "Python is a programming language that lets you work quickly and integrate systems more effectively.",
    hours: 50,
    credits: 3,
    location: "Online",
    instructor: "John Doe",
    id: 7,
    enrollment: 20,
};
  const wrapper = shallowMount(CourseItem);

  await wrapper.setProps({ course});

  expect(wrapper.find("[data-testid='add']").exists()).toBe(false);
});


it("shows the remove course button when the course is added", async () => {
  const wrapper = shallowMount(CourseItem, {
    props: { course: {} },
  });

  await wrapper.setData({ isAdded: true });
 
  const removeButton = wrapper.find("[data-testid='remove']");

  expect(removeButton.exists()).toBe(true);
  expect(removeButton.text()).toBe("Remove Course");
});


it("emits 'addCourse' click event when add course button is clicked", async () => {
  const course = {
    id: 1,
    name: "Test Course",
    credits: 3,
    hours: 50,
    description: "Test description",
    location: "Online",
    enrollment: 10,
  };
  const wrapper = shallowMount(CourseItem, {
    props: { course },
  });

  await wrapper.find("[data-testid='add']").trigger("click");
  expect(wrapper.emitted("addCourse")).toBeTruthy();
  expect(wrapper.emitted("addCourse")[0]).toEqual([course.id]);
});


it("emits 'removeCourse' click event when remove course button is clicked", async () => {
  const course = {
    id: 1,
    name: "Test Course",
    credits: 3,
    hours: 50,
    description: "Test description",
    location: "Online",
    enrollment: 10,
  };
  
  const wrapper = shallowMount(CourseItem, {
    props: { course },
  });

  await wrapper.setData({ isAdded: true });
  await wrapper.find("[data-testid='remove']").trigger("click");
  expect(wrapper.emitted("removeCourse")).toBeTruthy();
  expect(wrapper.emitted("removeCourse")[0]).toEqual([course.id]);
});

