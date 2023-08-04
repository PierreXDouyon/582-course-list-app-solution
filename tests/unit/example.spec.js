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
  //   const data = {  data() {
  //     return {
  //       isAdded: false,
  //     };
  //   },
  // };
  await wrapper.setData({ isAdded: false });
  expect(wrapper.find("[data-testid='remove']").exists()).toBe(false);
});

// working on this error un comment after lesson

// it("hides the add course button when the course enrollment is full", async () => {
//   const buttonText = "Add Course";
//   const wrapper = shallowMount(CourseItem);
//   const course = {
//     type: Object,
//     default() {
//       return {

//         name: "Python",
//         description:
//           "Python is a programming language that lets you work quickly and integrate systems more effectively.",
//         hours: 50,
//         credits: 3,
//         location: "Online",
//         instructor: "John Doe",
//         id: 7,
//         enrollment: 20,
//           }
//     },
//   };
//   // const computed = {
//   //   computed: {
//   //     isFull() {
//   //       return this.enrollment >= 20;
//   //     },
//   //   },
//   // };
//   await wrapper.setProps({ course, enrollment: 20 });
//   // await wrapper.setData({ isAdded: false });
//   expect(wrapper.find("[data-testid='add']").exists()).toBe(false);
// });

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
