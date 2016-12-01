<!--<template>
	{{$route.params | json}}
</template>-->

<template>
	<strong>
		{{$route.params | json}}
		<br>
		{{$route.path | json}}
	</strong>
</template>
