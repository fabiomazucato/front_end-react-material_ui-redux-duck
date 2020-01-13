import React, { Fragment } from 'react'

/* Material UI */
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

/* Components */
import Step1 from './Step1'
import Step2 from './Step2'

import { IViewProps } from './types'

function PersonCreate(props: IViewProps): JSX.Element {
	const {
		classes,
		activeStep,
		steps,
		handleNext,
		handleBack,
		handleReset,
		getStepContent,
		onChangeInput,
		form
	} = props

	return (
		<Fragment>
			<h1>Cadastrar Pessoa</h1>
			<div className={classes.root}>
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label: string) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<Container maxWidth='sm'>
					{activeStep === steps.length ? (
						<div className={classes.alignCenter}>
							<Button color='primary' onClick={handleReset}>
								{'Realizar Novo Cadastro'}
							</Button>
						</div>
					) : (
						<Fragment>
							<section>
								{activeStep === 0 ? (
									<Step1
										changeInput={onChangeInput}
										data={form}
									/>
								) : null}
								{activeStep === 1 ? (
									<Step2
										changeInput={onChangeInput}
										data={form}
									/>
								) : null}
							</section>

							<Box>
								<Typography className={classes.instructions}>
									{getStepContent(activeStep)}
								</Typography>
								<div>
									<Button
										disabled={activeStep === 0}
										onClick={handleBack}
										className={classes.backButton}
									>
										{'Voltar'}
									</Button>
									<Button
										variant='contained'
										color='primary'
										onClick={handleNext}
									>
										{activeStep === steps.length - 1
											? 'Salvar'
											: 'Avançar'}
									</Button>
								</div>
							</Box>
						</Fragment>
					)}
				</Container>
			</div>
		</Fragment>
	)
}

export default PersonCreate
