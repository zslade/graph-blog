import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const TurnerPage = () => {
  return (
    <Layout pageTitle="The Fighting Temeraire">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="author" content="Zoe Slade" />
        <meta name="date" content="2026-03-06" />
      </Helmet>
      <figure style={{textAlign: 'center'}}>
        <StaticImage
          alt="The Fighting Temeraire painting by the artist Turner"
          src="turner_painting.png"
          width={435}
        />
        <figcaption style={{fontSize: "11px"}}><i>The Fighting Temeraire, JMW Turner (1839). Movement: Romanticism.</i></figcaption>
      </figure>
      <br></br>
      <p>
       On the left of this painting, we see a decommissioned warship, the Temeraire, being towed to its last berth where it is to be broken up.
       Depicted in whites and pale yellows, the Temeraire looks ghostly and almost skeletal as it glides across the water. 
       In front of it, and in contrast, sits a squat tugboat, its pluming dark smoke partly obscuring the ship. 
       The modern steam-powered tug churns up the water, demonstrating its mighty strength in pulling the gigantic Temeraire.
      </p>
      <p>
       To the right is a dramatic sky, alive with fiery yellows, oranges and reds from the setting sun. 
       It is these sublime sunsets and incandescent skies for which Turner is well known and much loved. 
       They represent not so much what he saw, but what he felt about what he saw - the work of a true romantic. 
       But aside from being incredibly beautiful, the sunset sky also acts as a symbol of the end of an era.
      </p>
      <p>
       Putting these ingredients together - the majestic old warship, the ugly modern tug and 
       the setting sun - contemporary interpretations of this painting were that of an elegy to the Temeraire being pulled to 
       its final resting place, and perhaps moreover, a lament for old technology being replaced by steam-powered machines, 
       the new technology of Turner’s day. If we buy into these ideas, the painting can evoke feelings of sadness. 
       Not necessarily for the warship, but because of what this scene represents: an ending.
      </p>
      <p>
        However, Turner was arguably not anti-steam. Many of his drawings and paintings indicate that he was in fact very 
        interested in steam-powered vehicles and it is known that he used them extensively for travel. Given this, and if 
        we suppose that we could instead be observing a sunrise, this painting lends itself to a different interpretation. 
        The rising sun beckons in a new age. Its light kisses the front of the tugboat, highlighting it as the bright 
        technology of the future. The painting becomes a celebration of a new technological period.
      </p>
      <p>
       And that’s why I love this painting. It beautifully captures sentiments that continue to resonate today.
      </p>
      <p>
        We live in a world of constant technological innovation and change, of new gadgets pushing out old. 
        Developments can happen so quickly that we barely have the chance to notice what we’ve lost along the way; a simpler 
        time perhaps, when we weren’t being pinged by our smartphones every ten seconds. Turner’s painting can help us take 
        pause and remember what came before, and perhaps even to consider how some new technologies, for all their promise, 
        may cloud our minds, much as the tugboat’s smoke stains the sky.
      </p>
      <p>
        On the other hand, technology has transformed the world in remarkable ways, and we can all too easily take for granted 
        what has become embedded in everyday life - advanced medical treatments, accessible air travel, the internet, to name a 
        few. In this sense, the painting can instead remind us to reflect on and appreciate the benefits of the technology upon 
        which our modern lives depend, just as Turner is perhaps saluting the steam-powered tug.
      </p>
      <p>
        Both of these ideas - the loss of the old ways and the advent of the new - are captured simultaneously in this 
        painting, and their coexistence suggests something deeper: that they are inextricably linked, that the birth of one 
        thing necessitates the death of another, that advancement requires sacrifice. Perhaps this painting is ultimately 
        inviting us to consider whether the price of progress, at least in some cases, is worth paying.
      </p>
      <br></br>
    </Layout>
  )
}

export const Head = () => <title>The Fighting Temeraire</title>

export default TurnerPage