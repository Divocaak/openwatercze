<script>
	import RepreCard from '$lib/RepreCard.svelte';
</script>

<svelte:head>
	<title>Reprezentace</title>
</svelte:head>

<h1>Reprezentace ČR 2023</h1>
<div class="row">
	<div class="col-12"><h2>Senioři</h2></div>
	<RepreCard imgName="kozubek" name="Matěj Kozubek" club="KOMBR" titles="MEJ, MSJ, ME, MS, OH" />
	<RepreCard imgName="sterbova" name="Lenka Štěrbová" club="BOH" titles="MEJ, MSJ, ME, MS" instagram="lenka.sterbova" />
	<RepreCard imgName="benesova" name="Alena Benešová" club="KOMBR" titles="MEJ, MSJ, ME, MS" instagram="aja14beny" />
	<RepreCard imgName="zach" name="Ondřej Zach" club="PLČB" titles="ME, MS" instagram="ondrejzach97" />
	<RepreCard imgName="straka" name="Martin Straka" club="USK" titles="MEJ, ME" instagram="martin_straka12" />
	<RepreCard imgName="pleskotova" name="Julie Pleskotová" club="USK" titles="MEJ, ME" instagram="julie.pleskotova" />
	<RepreCard imgName="zubalikova" name="Lucie Zubalíková" club="KOMBR" titles="MEJ" instagram="lucka_zubalikova" />
	<RepreCard imgName="sterba" name="Vojislav Štěrba" club="BOH" titles="MEJ, MSJ" instagram="vojko_sterbic" />
	<div class="col-12"><h2>Junioři</h2></div>
	<RepreCard imgName="carda" name="Jan Carda" club="BOH" titles="MEJ" instagram="carda.jan" />
	<RepreCard imgName="rjasko" name="Štěpán Rjaško" club="USK" titles="MEJ, MSJ" instagram="stepan_ryashko" />
	<RepreCard imgName="chocholaty" name="Tomáš Chocholatý" club="SLPL" titles="MEJ, ME" instagram="tomaschocholaty" />
</div>
