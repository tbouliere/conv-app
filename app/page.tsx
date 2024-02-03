
import { Convertor } from '@/components/convertor'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Thread Conversion',
  description: 'Thread Conversion - DMC - Anchor',
}

export default function Home() {


	return (
<>	<div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
				<div className="flex items-center justify-between space-y-2">
					<div>
						<h2 className="text-2xl font-bold tracking-tight">Thread Conversion</h2>

					</div>

				</div>


			
					<Convertor></Convertor>
			

			</div>

			
		</>
		
	)
}
