<template class="back-color">
	<div>
		<v-container class="pb-0">
			<div class="text-h5 white--text back-color font-weight-bold">
				Discover
			</div>
		</v-container>

		<v-container>
			<v-row>
				<v-col
					cols="12"
					sm="12"
					md="8"
					class="back-color"
				>
					<v-card width="100%" class="rounded-xl">
						<v-img
							src="/img/img1.jpg"
							:aspect-ratio="10/3.85"
							gradient="to top right, rgba(64,74,87,0.4318102240896359) 0%, rgba(46,52,61,0.4290091036414566) 100%"
						>
							<v-card-text class="pb-0">
								<v-row>
									<v-col cols="12" sm="12" md="6" lg='6'>
										<h1 v-if="$vuetify.breakpoint.mdAndUp" class="mx-4 text-glow-grey" style="line-height: 150%;">
											How to do basic jumping and how to landing safely 
										</h1>
										<h3 v-if="$vuetify.breakpoint.smAndDown" class="mx-4 text-glow-grey" style="line-height: 150%;">
											How to do basic jumping and how to landing safely 
										</h3>
									</v-col>
									<v-col cols="6" v-if="$vuetify.breakpoint.mdAndUp">

									</v-col>
								</v-row>
							</v-card-text>

							<v-card-title class="white--text py-0">
								<v-list-item two-line>
									<v-list-item-avatar>
										<v-img src="https://randomuser.me/api/portraits/men/3.jpg"></v-img>
									</v-list-item-avatar>

									<v-list-item-content>
										<v-list-item-title class="text-glow-grey">Frag Sanderson</v-list-item-title>
										<v-list-item-subtitle class="text-glow-grey">2.8K views</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-card-title>

							<v-card-actions style="position:absolute;bottom:0px;right:0px;">
								<v-spacer></v-spacer>
								<v-chip
									small
									color="primary"
									class="ma-2"
								>
									7 min
								</v-chip>
							</v-card-actions>
						</v-img>
					</v-card>
				</v-col>
				<v-col
					cols="12"
					md="4"
					sm="12"
					class="back-color"
				>
					<v-card
						width="100%"
						class="rounded-xl"
					>
						<v-img
							src="/img/img2.jpg"
							:aspect-ratio="$vuetify.breakpoint.smAndDown ? 2/0.5 : 1/0.8"
							gradient="to top right, rgba(64,74,87,0.4318102240896359) 0%, rgba(46,52,61,0.4290091036414566) 100%"
						>
							<v-card-text class="pb-0">
								<v-row v-if="$vuetify.breakpoint.smAndDown">
									<v-col cols="12" sm="12" md="6" lg="6">
										<h1 v-if="$vuetify.breakpoint.mdAndUp" class="mx-4 text-glow-grey" style="line-height: 150%;">
											Skateboard tips you need to know
										</h1>
										<h3 v-if="$vuetify.breakpoint.smAndDown" class="mx-4 text-glow-grey" style="line-height: 150%;">
											How to do basic jumping and how to landing safely 
										</h3>
									</v-col>
									<v-col cols="6" v-if="$vuetify.breakpoint.mdAndUp">

									</v-col>
								</v-row>

								<v-row v-if="$vuetify.breakpoint.mdAndUp">
									<v-col cols="12" sm="12" md="8" lg="8">
										<h3 class="mx-4 text-glow-grey" style="line-height: 150%;">
											Skateboard tips you need to know
										</h3>
									</v-col>
									<v-col cols="4" v-if="$vuetify.breakpoint.mdAndUp">

									</v-col>
								</v-row>
							</v-card-text>

							<v-card-title v-if="$vuetify.breakpoint.smAndDown" class="white--text py-0">
								<v-list-item two-line>
									<v-list-item-avatar>
										<v-img src="https://randomuser.me/api/portraits/men/7.jpg"></v-img>
									</v-list-item-avatar>

									<v-list-item-content>
										<v-list-item-title class="text-glow-grey">James Hope</v-list-item-title>
										<v-list-item-subtitle class="text-glow-grey">2.8K views</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-card-title>

							<v-card-title v-if="$vuetify.breakpoint.mdAndUp" class="white--text py-0">
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title class="text-glow-grey">James Hope</v-list-item-title>
										<v-list-item-subtitle class="text-glow-grey">2.8K views</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-card-title>

							<v-card-title v-if="$vuetify.breakpoint.mdAndUp" class="white--text py-0">
								<v-list-item>
									<v-list-item-avatar>
										<v-img src="https://randomuser.me/api/portraits/men/7.jpg"></v-img>
									</v-list-item-avatar>
								</v-list-item>
							</v-card-title>

							<v-card-actions style="position:absolute;bottom:0px;right: 0px;">
								<v-spacer></v-spacer>
								<v-chip
									small
									color="primary"
									class="ma-2"
								>
									7 min
								</v-chip>
							</v-card-actions>
						</v-img>
					</v-card>
				</v-col>
			</v-row>
		</v-container>

		<v-container class="pb-0">
			<div class="text-h5 white--text back-color font-weight-bold">
				Most Watched
			</div>
		</v-container>

		<v-container>
			<v-row>
				<v-col cols="12" sm="12" md="3" lg="3">
					<v-card
						class="mx-auto rounded-xl back-color-card"
						style="position: relative;"
					>
						<v-img
							class="white--text align-end"
							src="/img/post1.jpg"
							:aspect-ratio="3/2"
						>
						</v-img>

						<v-badge
							dot
							bottom
							overlap
							color="cyan"
							class="position-avatar-card"
						>
							<v-avatar size="62" style="border: 1px solid white;">
								<img
									src="https://cdn.vuetifyjs.com/images/john.jpg"
									class="pa-1"
								>
							</v-avatar>
						</v-badge>

						<v-card-subtitle class="pb-0">	
							<v-badge
								dot
								inline
								color="success"
							>
								Andy William
							</v-badge>
						</v-card-subtitle>

						<v-card-text class="text--primary pb-0 text-truncate">
							Basic how to side your skateboard comfortly
						</v-card-text>

						<v-card-text class="pt-1">
							3.4K views | 1 weeks ago
						</v-card-text>
					</v-card>
				</v-col>

				<v-col cols="12" sm="12" md="3" lg="3">
					<v-card
						class="mx-auto rounded-xl back-color-card"
						style="position: relative;"
					>
						<v-img
							class="white--text align-end"
							src="/img/post2.jpg"
							:aspect-ratio="3/2"
						>
						</v-img>

						<v-badge
							dot
							bottom
							overlap
							color="cyan"
							class="position-avatar-card"
						>
							<v-avatar size="62" style="border: 1px solid white;">
								<img
									src="https://randomuser.me/api/portraits/men/21.jpg"
									class="pa-1"
								>
							</v-avatar>
						</v-badge>

						<v-card-subtitle class="pb-0">	
							<v-badge
								dot
								inline
								color="red"
							>
								Sam Jun
							</v-badge>
						</v-card-subtitle>

						<v-card-text class="text--primary pb-0 text-truncate">
							Prepare fot your first skateboard jump
						</v-card-text>

						<v-card-text class="pt-1">
							2.4K views | 4 days ago
						</v-card-text>
					</v-card>
				</v-col>

				<v-col cols="12" sm="12" md="3" lg="3">
					<v-card
						class="mx-auto rounded-xl back-color-card"
						style="position: relative;"
					>
						<v-img
							class="white--text align-end"
							src="/img/post3.jpg"
							:aspect-ratio="3/2"
						>
						</v-img>

						<v-badge
							dot
							bottom
							overlap
							color="cyan"
							class="position-avatar-card"
						>
							<v-avatar size="62" style="border: 1px solid white;">
								<img
									src="https://randomuser.me/api/portraits/men/17.jpg"
									class="pa-1"
								>
							</v-avatar>
						</v-badge>

						<v-card-subtitle class="pb-0">	
							<v-badge
								dot
								inline
								color="orange"
							>
								Budi Hakim
							</v-badge>
						</v-card-subtitle>

						<v-card-text class="text--primary pb-0 text-truncate">
							Tips to playing skateboard on the ramp
						</v-card-text>

						<v-card-text class="pt-1">
							8.1K views | 1 weeks ago
						</v-card-text>
					</v-card>
				</v-col>

				<v-col cols="12" sm="12" md="3" lg="3">
					<v-card
						class="mx-auto rounded-xl back-color-card"
						style="position: relative;"
					>
						<v-img
							class="white--text align-end"
							src="/img/post4.jpg"
							:aspect-ratio="3/2"
						>
						</v-img>

						<v-badge
							dot
							bottom
							overlap
							color="cyan"
							class="position-avatar-card"
						>
							<v-avatar size="62" style="border: 1px solid white;">
								<img
									src="https://randomuser.me/api/portraits/men/18.jpg"
									class="pa-1"
								>
							</v-avatar>
						</v-badge>

						<v-card-subtitle class="pb-0">	
							<v-badge
								dot
								inline
								color="purple"
							>
								Abdurozaq Nurul Hadi
							</v-badge>
						</v-card-subtitle>

						<v-card-text class="text--primary pb-0 text-truncate">
							How to to getting started with skateboard
						</v-card-text>

						<v-card-text class="pt-1">
							1.2M views | 2 weeks ago
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>

	
</template>

<style scoped>
	.back-color {
		background: #1f1d2c;
	}
	.back-color-card {
		background: #262837;
	}

	.position-avatar-card {
		position: absolute; 
		right: 25px; 
		bottom: 28%;
	}

	@media only screen and (max-width: 950px) {
		.position-avatar-card {
			position: absolute; 
			right: 25px; 
			bottom: 10%;
		}
	}

	@media only screen and (max-width: 700px) {
		.position-avatar-card {
			position: absolute; 
			right: 25px; 
			bottom: 10%;
		}
	}

	@media only screen and (max-width: 600px) {
		.position-avatar-card {
			position: absolute; 
			right: 25px; 
			bottom: 18%;
		}
	}
</style>