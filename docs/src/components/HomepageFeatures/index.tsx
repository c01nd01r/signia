import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.css'

import logo from '@site/static/img/logo.svg'

type FeatureItem = {
	title: string
	Svg: React.ComponentType<React.ComponentProps<'svg'>>
	description: JSX.Element
}

const FeatureList: FeatureItem[] = [
	{
		title: 'Easy to Use',
		Svg: logo,
		description: (
			<>
				Docusaurus was designed from the ground up to be easily installed and used to get your
				website up and running quickly.
			</>
		),
	},
	{
		title: 'Focus on What Matters',
		Svg: logo,
		description: (
			<>
				Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your
				docs into the <code>docs</code> directory.
			</>
		),
	},
	{
		title: 'Powered by React',
		Svg: logo,
		description: (
			<>
				Extend or customize your website layout by reusing React. Docusaurus can be extended while
				reusing the same header and footer.
			</>
		),
	},
]

function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}