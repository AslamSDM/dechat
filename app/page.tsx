import { Chat } from "@/components/chat";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
export default function Home() {
	return (
<>
<div className="flex flex-col gap-5">

<Card>
	<CardBody>
		
<Input placeholder="Enter your requirement"/>
	</CardBody>
</Card>
<Chat/>
</div>
</>
	);
}
