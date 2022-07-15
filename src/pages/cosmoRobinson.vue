<template>
  <q-page padding>
    <!-- content -->
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>

    こんにちはロビンソンコスモです。
    <q-btn color="primary" label="Primary" />
    <q-btn color="teal">
      <q-icon left size="3em" name="map" />
      <div>Label</div>
    </q-btn>
    <img
      alt="Quasar logo"
      src="~assets/バストアップ.jpg"
      style="width: 200px; height: 280px"
    />
    バナーの例です。
    <q-banner class="bg-primary text-white">
      Unfortunately, the credit card did not go through, please try again.
      <template v-slot:action>
        <q-btn flat color="white" label="Dismiss" />
        <q-btn flat color="white" label="Update Credit Card" />
      </template>
    </q-banner>

    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>

    <div class="q-pa-md">
      <q-badge color="secondary"> Model: {{ standard }} (0 to 50) </q-badge>

      <div class="row justify-around">
        <q-slider
          v-model="standard"
          :min="0"
          :max="50"
          vertical
          label
          switch-label-side
        />

        <q-slider
          v-model="standard"
          :min="0"
          :max="50"
          color="green"
          vertical
          reverse
          label-always
        />
      </div>
    </div>

    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-time v-model="time" />

        <q-time v-model="timeWithSeconds" with-seconds />
      </div>
    </div>
    ここから下はお悩み相談所です。
    <q-input v-model="text" label="Standard" />
    ここから下はスクロールすると背景が変わるや～つです。
    <div class="q-pa-md q-gutter-md">
      <div class="row justify-between">
        <q-parallax src="https://cdn.quasar.dev/img/parallax2.jpg">
          <h1 class="text-white">Basic</h1>
        </q-parallax>
      </div>
    </div>

    僕のサイトを評価してください！
    <div class="q-pa-md">
      <div class="q-gutter-y-md column">
        <q-rating
          v-model="ratingModel"
          size="3.5em"
          color="green-5"
          icon="star_border"
        />
      </div>
    </div>

    タイルを張る練習です。
    <div class="q-pa-md">
      <div class="row items-start q-gutter-md">
        <q-responsive :ratio="16 / 9" class="col">
          <div class="rounded-borders bg-primary text-white flex flex-center">
            Ratio 16:9
            <img
              alt="Quasar logo"
              src="~assets/バストアップ.jpg"
              style="width: 200px; height: 280px"
            />
          </div>
        </q-responsive>

        <q-responsive :ratio="1" class="col">
          <div class="rounded-borders bg-primary text-white flex flex-center">
            Ratio 1:1
            <img
              alt="Quasar logo"
              src="~assets/バストアップ.jpg"
              style="width: 200px; height: 280px"
            />
          </div>
        </q-responsive>
      </div>
    </div>

    只今ロード中です。
    <div class="q-pa-md">
      <q-card style="max-width: 300px">
        <q-item>
          <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-skeleton height="200px" square />

        <q-card-actions align="right" class="q-gutter-md">
          <q-skeleton type="QBtn" />
          <q-skeleton type="QBtn" />
        </q-card-actions>
      </q-card>
    </div>
    以下のものはスライドできます。
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered separator>
        <q-slide-item @left="onLeft" @right="onRight">
          <template v-slot:left>
            <q-icon name="done" />
          </template>
          <template v-slot:right>
            <q-icon name="alarm" />
          </template>

          <q-item>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" icon="bluetooth" />
            </q-item-section>
            <q-item-section>Icons only</q-item-section>
          </q-item>
        </q-slide-item>

        <q-slide-item @left="onLeft" @right="onRight">
          <template v-slot:left> Left </template>
          <template v-slot:right> Right content.. long </template>

          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img
                  src="https://cdn.quasar.dev/img/avatar6.jpg"
                  draggable="false"
                />
              </q-avatar>
            </q-item-section>
            <q-item-section>Text only</q-item-section>
          </q-item>
        </q-slide-item>

        <q-slide-item @left="onLeft" @right="onRight">
          <template v-slot:left>
            <div class="row items-center"><q-icon left name="done" /> Left</div>
          </template>
          <template v-slot:right>
            <div class="row items-center">
              Right content.. long <q-icon right name="alarm" />
            </div>
          </template>

          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img
                  src="https://cdn.quasar.dev/img/avatar4.jpg"
                  draggable="false"
                />
              </q-avatar>
            </q-item-section>
            <q-item-section>Text and icons</q-item-section>
          </q-item>
        </q-slide-item>
      </q-list>
    </div>
    ここより下はテーブルです。
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
        dark
        color="amber"
      />
    </div>
    この下にはタイムラインがあります。
    <div class="q-px-lg q-pb-md bg-grey-10 text-white">
      <q-timeline dark color="secondary">
        <q-timeline-entry heading>Timeline heading</q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 21, 1986"
          icon="delete"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry heading>November, 2017</q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          color="orange"
          icon="done_all"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
    落ち着く音楽を聴いてゆっくりなさってください。
    <div class="q-pa-md">
      <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  // name: 'PageName',
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);

    return {
      standard: ref(10),
      time: ref("10:56"),
      timeWithSeconds: ref("09:24:10"),
      columns,
      rows,
      name,
      age,
      accept,
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },
      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: "0%",
    iron: "0%",
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%",
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%",
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%",
  },
];
</script>
