import { useEffect } from "react";
import { loadVector } from "../helpers/loadVector";

export const Vector = ({ campaignId, customStyles, themeOptions }) => {

	console.log(campaignId);

	useEffect(() => {
		const vUnmount = loadVector({
      theme: 'infinity',
			campaignId,
			selector: '#vector',
			customStyles,
			customSheet: '',
			themeOptions,
    });

		return vUnmount;
	}, [campaignId, customStyles, themeOptions]);

	return (
		<>
			{'' === campaignId
			? (
				<div className="text-center">Missing Campaign ID</div>
			) : (
				<div id="vector">
					<div className="p-5 my-5">
						<div className="d-flex justify-content-center p-5">
							
							<div
								className="spinner-border spinner-border-bg text-secondary"
								style={{ width: 100, height: 100 }}
								role="status"
							/>
						</div>
					</div>
				</div>
			)}

			
		</>
		
	)
}
