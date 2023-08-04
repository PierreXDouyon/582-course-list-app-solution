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

  const wrapper = shallowMount(CourseItem);
  expect(wrapper.find("[data-testid='course-name']").text()).toBe("Course Name");
});


it("shows the add course button when the course is not added", () => {
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

it("shows the add course button when the course is not full", () => {
  const wrapper = shallowMount(CourseItem);
 
  const buttonText = "Add Course";
 
  expect (wrapper.find("[data-testid='add']").text()).toBe(buttonText);

});

//  it("hides the add course button when the course enrollment is full", async () => {
//   const buttonText = "Add Course";
//   const wrapper = shallowMount(CourseItem);
//   const course = {
//     type: Object,
//     default() {
//       return {
//         enrollment: 20,
//       };
//     },
//   };

//   expect (wrapper.find("[data-testid='add']").exists()).toBe(false);
// });
  



it("hides the remove course button when the course is not added", async () => {
  const buttonText = "Remove Course";
  const wrapper = shallowMount(CourseItem);
//   const data = {  data() {
//     return {
//       isAdded: false,
//     };
//   },
// };
await wrapper.setData({ isAdded: false });
expect (wrapper.find("[data-testid='remove']").exists()).toBe(false); 
});

// it("shows the remove course button when the course is added", async () => {
//   const buttonText = "Remove Course";
//   const wrapper = shallowMount(CourseItem);
//   const method = {   methods: {
//     sendAdd() {
//       console.log(1);
//       this.$emit("addCourse", this.course.id);
//       console.log(3);
//       this.isAdded = true;
//     },
//   },
// };

//   const data = {  data() {
//   return {
//     isAdded: true,
//   };
// },
// };
// expect (wrapper.find("[data-testid='remove']").exists()).toBe(true);
//   await wrapper.setData({ isAdded: true });
// });



// it("emits an action when the button is clicked", async () => {
//   const wrapper = shallowMount(CourseItem);
//   await wrapper.find("[data-testid='add']").trigger("click");
//   expect(wrapper.emitted().sendAdd).toBeTruthy();
//   console.log(wrapper.emitted().sendAdd);
//   expect(wrapper.emitted().sendAdd[0][0]).toEqual(true);
// });

