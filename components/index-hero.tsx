import { FC } from 'react'
import { StatusResponse } from 'pages/api/status'
import { fetcher } from 'lib/fetcher'
import useSWR from 'swr'

const BackgroundLogo: FC = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='645.727 257.95 689.978 188.138'
		role='img'
		aria-hidden
	>
		<defs>
			<clipPath id='a'>
				<path d='M645.727 257.95H1335.705V446.08799999999997H645.727z' />
			</clipPath>
		</defs>
		<g clipPath='url(#a)'>
			<path
				fill='inherit'
				d='M849.364 392.407q-11.996 14.061-32.448 14.061-20.451 0-32.447-13.963-11.996-13.962-11.996-38.543t11.996-38.642q11.996-14.06 32.447-14.06 20.452 0 32.448 13.962 11.995 13.962 11.995 38.543 0 24.582-11.995 38.642zm-52.408-11.602q7.178 9.734 19.96 9.734 12.783 0 19.96-9.734 7.178-9.734 7.178-27.04 0-17.108-7.178-26.941-7.177-9.832-19.96-9.832-12.782 0-19.96 9.734-7.177 9.734-7.177 27.236 0 17.109 7.177 26.843zm122.022 64.009l-8.26-13.372q21.829-1.18 30.186-7.571 8.358-6.391 8.358-17.403v-12.193q-8.849 12.193-25.958 12.193-17.698 0-29.399-13.766-11.701-13.765-11.701-38.937 0-24.384 11.504-38.445 11.504-14.06 30.186-14.06 15.732 0 25.368 10.619v-8.259h17.108v96.358q0 23.008-12.29 33.234-12.291 10.226-35.102 11.602zm7.866-54.275q6.293 0 12.487-3.835 6.195-3.834 9.931-10.324v-46.016q-3.54-5.9-10.029-9.636-6.49-3.736-12.389-3.736-13.372 0-20.354 9.537-6.981 9.538-6.981 27.236 0 17.109 7.571 26.941 7.571 9.833 19.764 9.833zm151.027 13.569h-17.108v-60.765q0-13.569-5.802-19.96-5.801-6.391-15.83-6.391-23.205 0-23.205 25.958v61.158h-17.108V303.62h17.108v10.225q9.243-12.585 25.958-12.585 17.699 0 26.843 10.717 9.144 10.718 9.144 34.316v57.815zm47.983-121.825q-3.147 3.048-7.67 3.048t-7.571-3.146q-3.048-3.147-3.048-7.473 0-4.523 3.147-7.768 3.146-3.244 7.472-3.244 4.523 0 7.67 3.244 3.146 3.245 3.146 7.768t-3.146 7.571zm.983 121.825h-17.109V303.62h17.109v100.488zm62.338 2.36q-10.816 0-20.55-4.622-9.734-4.621-15.83-12.29l12.192-10.423q11.209 11.996 24.581 11.996 8.456 0 13.569-3.245 5.113-3.245 5.113-9.537 0-4.72-3.736-8.555-3.737-3.834-7.67-5.703-3.933-1.868-11.602-4.817-15.339-5.703-23.205-12.783-7.866-7.079-7.866-18.681 0-12.193 9.538-19.371 9.537-7.177 24.286-7.177 21.042 0 33.824 15.142l-11.799 9.832q-9.243-9.636-22.222-9.636-7.669 0-12.192 2.95-4.523 2.95-4.523 8.26 0 2.949 1.475 5.407 1.475 2.459 5.31 4.622 3.834 2.163 6.096 3.244 2.261 1.082 8.357 3.442 15.929 5.703 24.287 12.979 8.357 7.276 8.357 20.451 0 13.373-9.636 20.944-9.635 7.571-26.154 7.571zm101.275 0q-20.452 0-32.546-14.651-12.094-14.65-12.094-38.052 0-24.581 12.193-38.543 12.192-13.962 32.447-13.962 18.092 0 29.792 12.094 11.701 12.094 11.701 35.692 0 5.506-.59 11.405h-68.041q.983 13.766 8.554 22.124 7.571 8.357 18.977 8.357 12.586 0 21.632-9.046l10.422 11.603q-12.979 12.979-32.447 12.979zm-27.335-60.569h51.523q-.197-15.535-7.375-22.516-7.177-6.981-16.813-6.981-11.603 0-19.075 7.374-7.473 7.375-8.26 22.123z'
			/>
			<path
				fill='none'
				stroke='inherit'
				strokeMiterlimit='3'
				strokeWidth='15.921'
				d='M658.727 265.91v139.133V265.91h0zm76.969 49.439v88.735-88.735h0zm-36.045 35.541v-84.98 84.98z'
			/>
		</g>

		<style jsx>{`
			svg {
				fill: var(--bg-secondary);
				stroke: var(--bg-secondary);
				width: 90%;
				max-width: 900px;
				display: block;
				position: absolute;
				margin-top: 100px;
				z-index: -1;
			}
		`}</style>
	</svg>
)

const IndexHero: FC = ({ children }) => {
	const { data } = useSWR<StatusResponse>('/api/status', fetcher, { refreshInterval: 0 })
	
	return (
		<section>
			<div className='container'>
				{data && !data.up && (
					<a href='https://kognise.instatus.com/' target='_blank' rel='noopener noreferrer' className='downtime'>
						Some of my projects are currently experiencing downtime.
					</a>
				)}

				{children}
			</div>

			<BackgroundLogo />

			<style jsx>{`
			section {
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
				padding: 150px 10px;
			}

			.container {
				width: 100%;
				max-width: 800px;
			}

			.container :global(h1) {
				color: var(--fg-very-strong);
				font-family: 'Open Sauce Sans', sans-serif;
				font-weight: 900;
				font-size: 2.4rem;
				margin: 0;
			}

			.container :global(p) {
				font-size: 1.5rem;
				margin: 32px 0;
			}

			.container :global(.button-group) {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 18px;
				margin-top: 42px;
			}

			.downtime {
				display: block;
				text-decoration: none;
				background: #2e2011;
				border: 2px solid #7d5427;
				border-radius: 10px;
				padding: 16px 30px;
				font-weight: 600;
				color: #ffffff;
				margin-bottom: 32px;
			}
		`}</style>
		</section>
	)
}

export default IndexHero
