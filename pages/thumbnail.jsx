import Image from "next/image";

const thumbnail = () => {
	return (
		<Image
			src={"/thumbnail.png"}
			alt="eat this thumbnail"
			width={500}
			height={500}
		/>
	);
};
export default thumbnail;
