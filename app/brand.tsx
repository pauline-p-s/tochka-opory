export default function Brand({full=false}:{full?:boolean}) {
  return <a className={`brand brand-image ${full?'brand-full':''}`} href="#" aria-label="Точка опоры — на главную">
    <img src={full?'/brand/primary.svg#svgView(viewBox(1006,660,3840,2070))':'/brand/secondary.svg#svgView(viewBox(1006,660,3836,1969))'} width={full?210:150} height={full?113:77} alt={full?'Точка опоры — центр реабилитации позвоночника и суставов':'Точка опоры'}/>
  </a>;
}
