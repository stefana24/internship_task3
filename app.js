const makeUser = function () {
  return {
    activities: [],
    jump: function () {
      this.activities.push("jumping");
      return this;
    },
    speak: function () {
      this.activities.push("speaking");
      return this;
    },
    run: function () {
      this.activities.push("running");
      return this;
    },
    swim: function () {
      this.activities.push("swimming");
      return this;
    },
    sleep: function () {
      this.activities.push("sleeping");
      return this;
    },
    exec: function () {
      console.log(this.activities.join(", "));
      this.activities = [];
    },
  };
};

const user = makeUser();
user.sleep().swim().speak().jump().swim().sleep().run().run().exec();
user.sleep().swim().exec();
