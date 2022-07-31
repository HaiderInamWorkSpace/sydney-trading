import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc'
import AboutCard from './AboutCard';
const About = () => {
  return (
    <div className='w-full bg-black text-white text-center'>
        <div className='max-w-[1240px] mx-auto px-4 py-16'>
            <div>
                <h1 className='py-4'>Growing Protocol Ecosystems</h1>
                <p className='py-4 text-xl'>
                    The Defi protocol system empowers developers, liquidity providers, and
                    traders to partiocipate in a financial marketplace that is open and accessible
                    to all.
                </p>

                {/* Card Container */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                    {/* Card */}
                    <AboutCard 
                        icon={<SiHiveBlockchain className='p-0.5' size={40} />} 
                        heading='Reliable, tamper-proof network' 
                        text='Use documentation, trusted nodes, premium data, and crytographic
                        proofs to connect highly accurate and available data/APIs to any smart
                        contract.' 
                    />
                    <AboutCard 
                        icon={<SiStrapi className='p-1' size={40} />}
                        heading='Seamless connection to any API'
                        text='Build on a flex framework that can retrieve
                        data from any API, connect with existing systems,
                        and integrate with any current or future blockchain.'
                    />
                    <AboutCard 
                        icon={<SiFsecure className='p-0.5' size={40} />}
                        heading='Proven, ready-made solutions'
                        text='Integrate pre-built, time-tested oracle solutionsthatalready secure
                        tens of billions in smart contract value for market-ledaing decentralized
                        applications'
                    />
                    <AboutCard 
                        icon={<VscServerProcess className='p-0.5' size={40} />}
                        heading='Secure off-chain computaion'
                        text='Use a decentralixed network of Sydney Trading Keeper nodes
                        to automate contracts, mitigating risk of manual interventions and centralized servers.'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About