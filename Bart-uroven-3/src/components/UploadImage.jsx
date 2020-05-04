import React from 'react'

import closeIcon from '../img/close.svg'
import addPhotos from '../img/add_photos.svg'


function close() {
	window.location.reload(false);
}


const UploadImage = props => {

	return (
		
	<div id="modalContainer">
		<div className="alertAdd">
			<div className="close-btn" onClick={close}>
				<img  src={closeIcon} />
				<p>Zavrieť</p>
			</div>
			<h1>Pridať fotky</h1>
			<div className="area">
				<img className="add-icon" src={addPhotos} />
				<p className="text-1">Sem presuňte fotky</p>
				<p className="text-sm"> alebo </p>
				<p className="text-border"> Vyberte súbory </p>
			</div>
			<a  id="closeBtn">+ Pridať</a>
		</div>
	</div>

	)
}

export default UploadImage
