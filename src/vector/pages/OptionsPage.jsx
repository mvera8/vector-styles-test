import { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { Vector, Navbar } from "../components"
import { updateVector } from "../hooks/updateVector";

import { test } from '../data/test';


export const OptionsPage = () => {

	const [campaignId, setcampaignId] = useState( '80334640-2812-48b3-ad19-d3be4e1e56f6' );
	const [myDemo, setmyDemo] = useState( '{}' )
	const { sendCode, texareaCode, changeVector, resetVector, onChange } = updateVector();

	const loadTest = () => {
		const stringTest = JSON.stringify( test, null,'\r' );
		setmyDemo( stringTest );
	}

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-8">
						<Vector campaignId={campaignId} themeOptions={sendCode} />
					</div>
					<div className="col-12 col-md-4">
						
						<div className="py-3">

							<div className="mb-3">

								<CodeMirror
									placeholder="{palette:{mode:'dark'}}"
									value={ myDemo }
									height="250px"
									onChange={ onChange }
								/>

							</div>

							<div className="mb-3">
								<button
									className="btn btn-primary btn-bg me-3"
									type="button"
									onClick={ changeVector }>
										Test Options
								</button>

								<button
									className="btn btn-info btn-bg me-3"
									type="button"
									onClick={ loadTest }>
										Demo
								</button>

								<button
									className="btn btn-dark btn-bg"
									type="button"
									onClick={ resetVector }>
										Reset
								</button>
							</div>
							
						</div>
						
						
					</div>
				</div>
			</div>
		</>
	)
}
