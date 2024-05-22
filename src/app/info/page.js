'use client';
import Image from "next/image";
import Link from "next/link";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Home() {
    return (
      <div id="main-page">

        <div id="top-bar" className="flex justify-between items-center mb-4">
          <div id="home-icon">
            <Link href="/" passHref>
              <Image src="/images/home-icon.png" alt="Home" width={25} height={25} />
            </Link>
          </div>
         <div id="title-text">Supreme Court Cases</div>
          <div id="info-icon">
            <Link href="/info" passHref>
                <Image src="/images/info-icon.png" alt="Info" width={25} height={25} />
            </Link>
          </div>
        </div>

        <div id="info-page">
        <div>

          <h1 id="title">About This Site</h1>

          <p id="website-summary">
            {"This website provides the names, dates, and a brief summary of landmark US Supreme Court cases, as well as Ed's very own official liberty ranking (see below for explanation). If you click on any Supreme Court Case, it will provide a much more detailed explanation of the case and its effect on liberty."}
          </p>
          </div>
          <div id="ex-slider-box">
            <div id="ex-slider-desc">
              {"In this slider, the eagle represents a positive change in individual liberty, which means people have more independence/freedom from government. The chains represent a negative change in individual liberty, as in more govnerment control and less independence. If the slider is near the middle, it means the Supreme Court decision did not really affect liberty all that much."}
            </div>
            <div id="slider-ex">
              <div id="example-slider">
                <div id="emoji-box">
                  <div>
                    ⛓️
                  </div>
                  <div>
                    🦅
                  </div>
                </div>
              <Slider defaultValue={50} disabled={false} />
              </div>
            </div>
          </div>
          <div id="about">
            <div id="title">
              About the Author
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <div style={{minWidth:"50%", paddingRight: "20px"}}>
                <Image src="/images/me.png" alt="literally-me" width={200} height={200} />
              </div>
              <div>
                {"Edwin is a student at Harvard-Westlake High School. This website was created for his 11th grade History capstone project."}
              </div>

            </div>
          </div>
          <div id="credits">
            <div id="title">
              Credits
            </div>
            <div class="credit-card">{"Website Design: Edwin 'Big Ed' Luhnow"}</div>
            <div class="credit-card">{"Research: Edwin 'Big Ed' Luhnow"}</div>
            <div class="credit-card">{"Editor: Edwin 'Big Ed' Luhnow"}</div>
            <div class="credit-card">{"Product Tester: Edwin 'Big Ed' Luhnow"}</div>
            <div class="credit-card">{"Team Manager: Edwin 'Big Ed' Luhnow"}</div>
            <div class="credit-card">{"Unpaid Intern: Edwin 'Big Ed' Luhnow"}</div>
          </div>
        </div>
        
      </div>
    );
  }