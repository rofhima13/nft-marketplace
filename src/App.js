import './App.css';
import StyledMain from './components/Main';
import { Logo, StyledHeader, HeaderContainer } from './components/Header';
import { StyledSearch } from './components/Input';
import { StyledNavButton, StyledWalletButton } from './components/Buttons';
import { HeroButton, HeroPage, HeroHeading, HeroText } from './components/Hero';
import { CarouselBar, CarouselButton, CarouselItem, CarouselButtonContainer, CarouselSeekBar } from './components/Carousel';
import { Sponsor, SponsorContainer } from './components/Sponsor';
import ethereumLogo from './assets/ethereum-logo.png';
import binanceLogo from './assets/binance-logo.png';
import solanaLogo from './assets/solana-logo.png';
import polkadotLogo from './assets/polkadot-logo.png';
import cardanoLogo from './assets/cardano-logo.png';


function App() {
  return (
    <div className="App">
      <StyledMain>
        <StyledHeader>
          <HeaderContainer>
            <Logo src="data:image/png;base64,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" alt="logo"/>
              <StyledSearch type="text" id="search" value="Users and Collection"/>
          </HeaderContainer>
          <HeaderContainer>
            <StyledNavButton>
              Explore ???
            </StyledNavButton>
            <StyledNavButton>
              Create
            </StyledNavButton>
          </HeaderContainer>
          <HeaderContainer>
            <StyledNavButton>
              Swap
            </StyledNavButton>
            <StyledNavButton>
              Launchpad ???
            </StyledNavButton>
                
            <StyledWalletButton>
              Connect Wallet
            </StyledWalletButton>
          </HeaderContainer>
        </StyledHeader>

        <HeroPage>
              <div>
                  <div class="container">
                      <HeroHeading>NFT MARKETPLACE</HeroHeading>
                      <HeroText>
                          Live mints and realtime analytics
                          provided directly from onchain data.
                          Start trading your NFTs.
                      </HeroText>
                      <div>
                          <HeroButton>List Your Project</HeroButton>
                          <HeroButton>Mint an NFT</HeroButton>
                      </div>
                  </div>
              </div>
              <div>
                  <div class="container">
                      <div class="carousel-container">
                          <CarouselItem>
                              <p>Fashion Art Collection</p>
                              <CarouselButtonContainer>
                                  <CarouselButton className="carousel-button-left">
                                      left
                                  </CarouselButton>
                                  <CarouselButton className="carousel-button-right">
                                      right
                                  </CarouselButton>
                              </CarouselButtonContainer>
                          </CarouselItem>
                          <CarouselBar>
                              <div class="carousel-bar-background">
                                  <CarouselSeekBar></CarouselSeekBar>
                              </div>
                          </CarouselBar>
                      </div>
                  </div>
              </div>
          </HeroPage>
          <SponsorContainer>
            <Sponsor src={ethereumLogo} />
            <Sponsor src={binanceLogo}/>
            <Sponsor src={polkadotLogo}/>
            <Sponsor src={solanaLogo}/>
            <Sponsor src={cardanoLogo}/>
        </SponsorContainer>
      </StyledMain>

    </div>
  );
}

export default App;
