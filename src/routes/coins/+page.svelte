<script lang="ts">
	import type { PageData } from './$types';

	let titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

	export let data: PageData;

	const searchCoin = (value) => {
		data.coins = data.coins.filter(
			(coin) =>
				coin.name.toLowerCase().includes(value.toLowerCase()) ||
				coin.symbol.toLowerCase().includes(value.toLowerCase())
		);
	};
</script>

<!-- {JSON.stringify(data, null, 2)} -->
<h1>Coins Market</h1>

<div class="px-8">
	<input
		type="text"
		class="bg-dark text-white rounded-none border-none my-4 w-full pl-4 focus:border-transparent"
		placeholder="Search your coin"
		on:keyup={({ target: { value } }) => searchCoin(value)}
	/>
	<table class="table w-full ">
		<thead>
			<tr>
				{#each titles as title}
					<th>{title}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data.coins as coin, i}
				<tr>
					<td>{i + 1}</td>
					<td class="flex items-center">
						<img src={coin.image} alt={coin.name} class="w-8 mr-3" />
						<span>
							{coin.name}
						</span>
						<span class="ml-1.5 uppercase text-slate-500/75">{coin.symbol}</span>
					</td>
					<td>$ {coin.current_price.toLocaleString()}</td>
					<td class={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-red-500'}
						>{coin.price_change_percentage_24h} %</td
					>
					<td>$ {coin.total_volume.toLocaleString()}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
