(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,r)=>{const s=r(809),{lightningChart:a,AutoCursorModes:n,Themes:i}=s,{createSpectrumDataGenerator:o}=r(27),l=a().ChartXY({}).setTitle("Spectrum Line Chart").setAutoCursorMode(n.disabled);l.getDefaultAxisY().setScrollStrategy(void 0).setInterval(.09,.9);const u=l.addLineSeries();o().setSampleSize(1024).setNumberOfSamples(600).setFrequencyStability(2).setVariation(2).generate().toPromise().then((e=>{let t=0;const r=()=>{t=(t+1)%e.length;const s=e[t];u.clear().addArrayY(s),requestAnimationFrame(r)};r()}))}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);