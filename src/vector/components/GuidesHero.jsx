import { useState } from "react";
import { useParams } from "react-router-dom"
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { Vector } from "../components"
import { updateVector } from "../hooks/updateVector";

export const GuidesHero = () => {

	const { id } = useParams();
	const [campaignId, setcampaignId] = useState( id );
	const { sendCode, changeVector, resetVector, onChange } = updateVector();

	return (
		<>
			{/* Site markup */}
			<div className="py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-6 mb-md-5  mb-lg-0">
							<div className="text-center" style={{height: '100%', padding: 50, backgroundColor: 'red'}}>Image</div>
						</div>
						<div className="col-12 col-lg-6 mt-5 mt-lg-0">
							<h2 className="h2 mb-3">New Guide to Test</h2>
							<div className="pb-5">
								<div className="bg-white px-4 py-1 rounded mb-5 shadow">
									<Vector campaignId={campaignId} customStyles={sendCode} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Vector styles */}
			<div className="offcanvas offcanvas-end" data-bs-backdrop="false" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasExampleLabel">Styles</h5>
					<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>

				<div className="offcanvas-body">
					<div className="mb-5">
						<label>Styles</label>
						<CodeMirror
							placeholder="*{color:red;}"
							height="250px"
							extensions={[css({ css: true })]}
							onChange={ onChange }
						/>
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
		</>
	)
}
