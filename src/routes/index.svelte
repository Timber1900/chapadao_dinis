<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  let timeMissing = '';

  const getTimeMissing = () => {
    const date = new Date();
    const christmasDate = new Date(date.getFullYear(), 2, 10, 0, 0, 0, 0);
    let timeDiff = christmasDate.getTime() - date.getTime();
    if (timeDiff < 0) {
      timeDiff += 1000 * 60 * 60 * 24 * 30 * 12;
    }
    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) - months * 30;
    const hours =
      Math.floor(timeDiff / (1000 * 60 * 60)) - months * 30 * 24 - days * 24;
    const minutes =
      Math.floor(timeDiff / (1000 * 60)) -
      months * 30 * 24 * 60 -
      days * 24 * 60 -
      hours * 60;
    const seconds =
      Math.floor(timeDiff / 1000) -
      months * 30 * 24 * 60 * 60 -
      days * 24 * 60 * 60 -
      hours * 60 * 60 -
      minutes * 60;

    if (months == 0 && days == 0) {
      return 'O dinis vai levar um chapadão!';
    }

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  onMount(async () => {
    const animation = () => {
      timeMissing = getTimeMissing();
      requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  });
</script>

<svelte:head>
  <title>Countdown chapadão do dinis</title>
</svelte:head>

<div class="w-screen h-screen flex items-center justify-center flex-col">
  <header class="text-3xl font-semibold my-6 text-center">
    <p>O Dinis está prestes a levar um chapadão! 🤚🤚</p>
  </header>
  <div class="w-full md:grow px-8 md:pb-8 flex justify-center items-center">
    <div
      class="aspect-[1360/765] pic-fit:h-full pic-fit:w-auto w-full bg-main-bg bg-contain bg-no-repeat bg-center rounded-2xl bg-clip-border shadow-lg flex items-center justify-center flex items-center justify-center"
    >
      <span
        class="text-6xl font-bold font-sans text-transparent bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text drop-shadow text-stroke-black text-stroke-2 md:flex hidden h-full text-center  flex-col items-center justify-center"
      >
        <p>{timeMissing}</p>
      </span>
    </div>
  </div>
  <span
    class="text-4xl font-bold font-sans text-transparent bg-gradient-to-br from-red-500 to-rose-500 bg-clip-text drop-shadow text-stroke-black text-stroke-2 md:hidden block h-20 text-center"
  >
    {timeMissing}
  </span>
</div>
