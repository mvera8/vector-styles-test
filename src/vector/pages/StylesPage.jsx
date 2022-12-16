import { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { Vector, Navbar } from "../components"
import { updateVector } from "../hooks/updateVector";

export const StylesPage = () => {

	const [campaignId, setcampaignId] = useState( '80334640-2812-48b3-ad19-d3be4e1e56f6' );

	const { sendCode, changeVector, resetVector, onChange } = updateVector();

	const [changeCampaign, setchangeCampaign] = useState('');

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-8">
						<Vector campaignId={'' === changeCampaign ? campaignId : changeCampaign } customStyles={sendCode} />
					</div>
					<div className="col-12 col-md-4">
						
						<div className="py-3">

							<div className="mb-3">

								<div className="mb-5">
									<label>Change Campaign ID</label>
									<input
										type="text"
										className="form-control"
										value={changeCampaign}
										name="changeCampaign"
										onChange={ e => setchangeCampaign(e.target.value) }
									/>
								</div>

								<div className="mb-5">
									<label>Styles</label>
									<CodeMirror
										placeholder="*{color:red;}"
										height="250px"
										extensions={[css({ css: true })]}
										onChange={ onChange }
									/>
								</div>

							</div>

							<div className="mb-3">
								<button
									className="btn btn-primary btn-bg me-3"
									type="button"
									onClick={ changeVector }>
										Test Styles
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
