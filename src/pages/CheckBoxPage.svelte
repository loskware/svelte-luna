<script>
  import CheckBoxCard from "../components/CheckBoxCard.svelte";
</script>

<section>
  <CheckBoxCard title="LEFT LABEL" />
  <CheckBoxCard title="RIGHT LABEL" labelPosition="right" />
</section>

<style lang="scss">
  section {
    display: flex;
    justify-content: center;
  }
</style>
