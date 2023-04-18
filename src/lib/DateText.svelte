<script>
    export let date;
    let dateFormatted = new Date(date).toLocaleString('cs-CZ', {});
</script>

<h6 class="text-muted">Publikováno: {dateFormatted}</h6>