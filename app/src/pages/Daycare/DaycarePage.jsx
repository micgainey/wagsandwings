import React from 'react';
import Container from 'react-bootstrap/Container'

// This page will contain everything you need to know about daycare
// all policies will be on this page and fees.
const DaycarePage = () => {
  return (
    <>
      <Container>
        <h1>Daycare</h1>

        <Container>
          <h2>Policies:</h2>
          <ul>
            <li>
              No dogs in heat.
            </li>
            <li>
              No age policy. But the health of the dog must be in good standing. We have accommodations for senior dogs. We will also take dogs with disabilities. Please inquire for rates.
            </li>
            <li>
              Your pet must be up to date on all vaccinations, and proof of documentation must be uploaded into our system prior to boarding or daycare.
            </li>
            <li>
              Your pet must currently be on topical or oral flea, tick, heartworm medication.
            </li>
            <li>
              Dogs are required to have collars with name tags that have their <strong>first</strong> and <strong>last</strong> name. These collars must be worn during their stay.
              <ul>
                <li>
                  IF a dog comes to daycare without one, we will provide a name tag and collar for $20.00.
                </li>
              </ul>
            </li>
            <li>
              Dogs must be on a leash prior to check-in.
            </li>
            <li>
              If you would like your pet to be on a meal schedule please provide instructions. If you forget to bring food for your pet, we will provide kibble meals for $7.00 with the brand of our choice.
            </li>
            <li>
              If your dog requires prescription medications, you must bring it in a sealed container with detailed instructions on how to administer and store. (+$5.00 for each medication)
            </li>
            <li>
              Dogs are required to participate in a behavior evaluation. (half-day) At the cost of the owner. ($30.00)
            </li>
            <li>
              All dogs must be non-aggressive and not show any food/toy possessiveness.
            </li>
            <li>
              Although all dogs will be supervised, there is always a chance of scratches and nips during play. If this happens, owners will be informed.
            </li>
            <li>
              Only authorized pick-up persons are allowed to pick up your pet. If you want to have someone other than who we have on file to pick up your pet, you will need to email us in advance of the visit with the person's name. We will check ID upon pick up.
            </li>
            <li>
              Payment for daycare is processed at checkout. If you have purchased a package then your credit will be deducted at checkout.
            </li>
            <li>
              Nails must be trimmed, if they aren't we can trim your pet's nails for $10.00. This will ensure that we minimize injuries due to scratching.
            </li>
            <li>
              No refunds for early pickup.
            </li>
          </ul>
        </Container>
      </Container>
    </>
  );
}

export default DaycarePage;
