import svgPaths from "./svg-kdux404fkx";
import imgRectangle238 from "figma:asset/a8b6e7f9e8d2e1b7527b454f12a5163dbcccfd24.png";
import imgGallery from "figma:asset/52c91333622ed38645f783e8d6fb08df8137f598.png";
import imgMedia from "figma:asset/e92e76d334fc055c8e55cca12eed5e4adc81d980.png";
import imgGallery1 from "figma:asset/6ace5a73faa3cd0ec60f2e1b24683dc849421f93.png";
import imgMedia1 from "figma:asset/786846110668afb0362d7f54c5297a41ae8da65a.png";
import imgMedia2 from "figma:asset/f18f638f59bffa1f7a07437c1d4d0856979cc556.png";

function InputText() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] relative shrink-0 w-full" data-name="Input text">
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44484e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[24px]">16 апреля — 22 апреля</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Content">
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737880] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p>
          <span className="leading-[16px]">{`Заезд `}</span>
          <span className="leading-[16px]">—</span>
          <span className="leading-[16px]">{` Выезд`}</span>
        </p>
      </div>
      <InputText />
    </div>
  );
}

function Conteiner() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Conteiner">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] py-[4px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

function InputValidation() {
  return (
    <div className="bg-[rgba(27,94,178,0.12)] relative rounded-[4px] shrink-0 w-full" data-name="Input validation">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pr-[12px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-[40px] min-w-px relative rounded-[4px]" data-name="Input">
            <Conteiner />
          </div>
        </div>
      </div>
    </div>
  );
}

function InputText1() {
  return (
    <div className="content-stretch flex items-center min-h-[24px] relative shrink-0 w-full" data-name="Input text">
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44484e] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[24px]">2 взрослых, 1 ребенок</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Content">
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#737880] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[16px]">Гости</p>
      </div>
      <InputText1 />
    </div>
  );
}

function Conteiner1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Conteiner">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] py-[4px] relative w-full">
          <div className="content-stretch flex gap-[8px] items-center relative rounded-[4px] shrink-0 w-full" data-name="Placeholder">
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function InputValidation1() {
  return (
    <div className="bg-[rgba(27,94,178,0.12)] relative rounded-[4px] shrink-0 w-full" data-name="Input validation">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pr-[12px] relative w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-[40px] min-w-px relative rounded-[4px]" data-name="Input">
            <Conteiner1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function IPart() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="I part">
      <div className="content-stretch flex flex-col items-start max-w-[400px] min-w-[80px] relative shrink-0 w-[224px]" data-name="Text field">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Validation">
          <InputValidation />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start max-w-[400px] min-w-[80px] relative shrink-0 w-[224px]" data-name="Text field">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Validation">
          <InputValidation1 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#d9e9ff] content-stretch flex h-[32px] items-center justify-center max-w-[32px] min-h-[32px] min-w-[32px] px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ai_lock_24">
          <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 16.6667">
              <path clipRule="evenodd" d={svgPaths.p358eee00} fill="var(--fill-0, #1B5EB2)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative self-stretch shrink-0 text-[#1b5eb2] text-[12px] w-[64px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[16px]">Ввести промокод</p>
      </div>
    </div>
  );
}

function LC() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="L&C">
      <div className="bg-[#d9e9ff] content-stretch flex items-center justify-center max-w-[32px] min-h-[32px] min-w-[32px] px-[8px] py-[4px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 size-[32px]" data-name="Button">
        <div className="relative shrink-0 size-[20px]" data-name="AlmaGraphics/Flag/flg_ru_4-3">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d="M0 0H20V20H0V0Z" fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
            <div className="absolute inset-[33.33%_0_0_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13.3333">
                <path clipRule="evenodd" d="M0 0H20V13.3333H0V0Z" fill="var(--fill-0, #0039A6)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[66.67%_0_0_0]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 6.66667">
                <path clipRule="evenodd" d="M0 0H20V6.66667H0V0Z" fill="var(--fill-0, #D52B1E)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.16)] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="bg-[#d9e9ff] content-stretch flex h-[32px] items-center justify-center min-h-[32px] min-w-[32px] px-[8px] py-[4px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Button">
        <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Lable">
          <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b5eb2] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
            <p className="leading-[16px]">RUB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="bg-[#d9e9ff] content-stretch flex h-[32px] items-center justify-center max-w-[32px] min-h-[32px] min-w-[32px] px-[8px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ai_adult_new_24">
          <div className="absolute inset-[4.17%_8.33%_8.33%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 17.5">
              <g id="Vector">
                <path d={svgPaths.p1578ac00} fill="var(--fill-0, #1B5EB2)" />
                <path d={svgPaths.p3eedd780} fill="var(--fill-0, #1B5EB2)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative self-stretch shrink-0 text-[#1b5eb2] text-[12px] w-[34px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[16px]">Войти</p>
      </div>
    </div>
  );
}

function IiPart() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="II part">
      <Frame1 />
      <LC />
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#eff1f4] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap items-center justify-between px-[32px] py-[12px] relative w-full">
          <IPart />
          <IiPart />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[8px] py-[12px] relative w-full">
          <div className="content-stretch flex h-[32px] items-center justify-center min-h-[32px] min-w-[32px] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ai_arrow-left_24">
              <div className="absolute flex inset-[21.88%_32.29%_19.79%_32.29%] items-center justify-center">
                <div className="-rotate-90 -scale-y-100 flex-none h-[8.5px] w-[14px]">
                  <div className="relative size-full" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7.08333">
                      <path clipRule="evenodd" d={svgPaths.p3664ba00} fill="var(--fill-0, #1B5EB2)" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Lable">
              <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b5eb2] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
                <p className="leading-[16px]">Назад</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex h-[32px] items-center justify-center min-h-[32px] min-w-[32px] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
            <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Lable">
              <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b5eb2] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
                <p className="leading-[16px]">Продолжить бронирование</p>
              </div>
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ai_arrow-rigth_24">
              <div className="absolute flex inset-[21.88%_32.29%_19.79%_32.29%] items-center justify-center">
                <div className="-rotate-90 flex-none h-[8.5px] w-[14px]">
                  <div className="relative size-full" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7.08333">
                      <path clipRule="evenodd" d={svgPaths.p3664ba00} fill="var(--fill-0, #1B5EB2)" fillRule="evenodd" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Accent() {
  return <div className="bg-[#1b5eb2] h-[4px] shrink-0 w-[252px]" data-name="Accent" />;
}

function Track() {
  return <div className="bg-[#94aed2] flex-[1_0_0] h-[4px] min-h-px min-w-px" data-name="Track" />;
}

function Prgrs() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Prgrs">
      <Accent />
      <Track />
    </div>
  );
}

function Progressbar() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative shrink-0 w-full" data-name="Progressbar">
      <Content2 />
      <Prgrs />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-1px)] text-[#2e3236] text-[20px] text-center top-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[28px]">Закажите услуги</p>
      </div>
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Headline">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1b5eb2] text-[18px] whitespace-nowrap">Стандарт с двуспальной кроватью</p>
      <div className="bg-[#d9e9ff] content-stretch flex h-[32px] items-center justify-center max-w-[32px] min-h-[32px] min-w-[32px] px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ai_arrow_corner_up_24">
          <div className="absolute inset-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p361b3c80} fill="var(--fill-0, #1B5EB2)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative rounded-[9px] shrink-0 size-[18px]" data-name="icon 2">
      <div className="-translate-y-1/2 absolute left-0 overflow-clip size-[18px] top-1/2" data-name="bfic_3-people_24*24">
        <div className="absolute inset-[16.67%_4.17%_16.67%_4.16%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5006 12">
            <path d={svgPaths.p3bc4400} fill="var(--fill-0, #8D929B)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[15px] items-center overflow-clip relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3236] text-[10.8px] whitespace-nowrap">
        <p className="leading-[12px]">до 3 мест</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative rounded-[2px] shrink-0" data-name="Content">
      <Icon />
      <div className="h-[24px] shrink-0 w-[3px]" data-name="Padding 3" />
      <Text />
      <div className="h-[24px] shrink-0 w-[3px]" data-name="Padding 3" />
    </div>
  );
}

function BadgeBfLil() {
  return (
    <div className="content-stretch flex h-[24px] items-center p-[3px] relative rounded-[12px] shrink-0" data-name="Badge BF LIL">
      <Content6 />
    </div>
  );
}

function LilNormal() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[2px] shrink-0" data-name="Lil/Normal">
      <BadgeBfLil />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative rounded-[9px] shrink-0 size-[18px]" data-name="icon 2">
      <div className="-translate-y-1/2 absolute left-0 size-[18px] top-1/2" data-name="bfic_square_24*24">
        <div className="absolute inset-[16.67%_16.67%_16.37%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12.0537">
            <path clipRule="evenodd" d={svgPaths.p243fff00} fill="var(--fill-0, #8D929B)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3236] text-[10.8px] whitespace-nowrap">
        <p className="leading-[12px]">58 кв. м.</p>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative rounded-[2px] shrink-0" data-name="Content">
      <Icon1 />
      <div className="h-[24px] shrink-0 w-[3px]" data-name="Padding 3" />
      <Text1 />
      <div className="h-[24px] shrink-0 w-[3px]" data-name="Padding 3" />
    </div>
  );
}

function BadgeBfLil1() {
  return (
    <div className="content-stretch flex items-center px-[3px] relative rounded-[15px] shrink-0" data-name="Badge BF LIL">
      <Content7 />
    </div>
  );
}

function LilNormal1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[2px] shrink-0" data-name="Lil/Normal">
      <BadgeBfLil1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[18px]" data-name="icon 2">
      <div className="-translate-y-1/2 absolute left-0 rounded-[9px] size-[18px] top-1/2" data-name="beic_quantity-room_24">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path clipRule="evenodd" d={svgPaths.p30371200} fill="var(--fill-0, #8D929B)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3236] text-[10.8px] whitespace-nowrap">
        <p className="leading-[12px]">1 комн.</p>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative rounded-[2px] shrink-0" data-name="Content">
      <Icon2 />
      <div className="h-[24px] shrink-0 w-[3px]" data-name="Padding 3" />
      <Text2 />
      <div className="h-[24px] shrink-0 w-[3px]" data-name="Padding 3" />
    </div>
  );
}

function BadgeBfLil2() {
  return (
    <div className="content-stretch flex items-center px-[3px] relative rounded-[15px] shrink-0" data-name="Badge BF LIL">
      <Content8 />
    </div>
  );
}

function LilNormal2() {
  return (
    <div className="content-stretch flex flex-col items-start px-px relative rounded-[12px] shrink-0" data-name="Lil/Normal">
      <BadgeBfLil2 />
    </div>
  );
}

function Property() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="Property">
      <LilNormal />
      <LilNormal1 />
      <LilNormal2 />
    </div>
  );
}

function Amenitis() {
  return (
    <div className="content-end flex flex-wrap gap-[6px] items-end relative shrink-0" data-name="amenitis">
      <div className="bg-[#eff1f4] content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="badge">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="beic_bathroom_24">
          <div className="absolute inset-[15%_0_9.76%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12.0382">
              <path d={svgPaths.p4acc100} fill="var(--fill-0, #737880)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44484e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          <p className="leading-[16px]">Ванная комната</p>
        </div>
      </div>
      <div className="bg-[#eff1f4] content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="badge">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="beic_wifi_24">
          <div className="absolute inset-[20.83%_9.91%_21.7%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0806 9.19539">
              <g id="Vector">
                <path d={svgPaths.p307ba880} fill="var(--fill-0, #737880)" />
                <path d={svgPaths.pac43100} fill="var(--fill-0, #737880)" />
                <path d={svgPaths.p1631fe00} fill="var(--fill-0, #737880)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44484e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          <p className="leading-[16px]">Wi-Fi</p>
        </div>
      </div>
      <div className="bg-[#eff1f4] content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="badge">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="beic_hairdryer_24">
          <div className="absolute inset-[12.5%_8.33%_8.33%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 12.6667">
              <g id="Vector">
                <path d={svgPaths.p17497580} fill="var(--fill-0, #737880)" />
                <path clipRule="evenodd" d={svgPaths.p31c34b80} fill="var(--fill-0, #737880)" fillRule="evenodd" />
                <path d={svgPaths.p275fcf0} fill="var(--fill-0, #737880)" />
              </g>
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44484e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          <p className="leading-[16px]">Фен</p>
        </div>
      </div>
      <div className="bg-[#eff1f4] content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="badge">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="beic_parking_24">
          <div className="absolute inset-[12.5%_19.89%_12.5%_21.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.39588 12">
              <path d={svgPaths.p3a2fcef0} fill="var(--fill-0, #737880)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#44484e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          <p className="leading-[16px]">Парковка</p>
        </div>
      </div>
    </div>
  );
}

function RightPart() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Right part">
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[20px] pr-[16px] py-[16px] relative size-full">
        <Headline />
        <Property />
        <Amenitis />
      </div>
    </div>
  );
}

function Media() {
  return (
    <div className="content-stretch flex flex-col h-[140px] items-start pr-[16px] py-[16px] relative shrink-0 w-[144px]" data-name="Media">
      <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle238} />
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <RightPart />
      </div>
      <Media />
    </div>
  );
}

function RoomCategoryCard() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-[593px]" data-name="Room category card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Content5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c3c8cf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Area() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="area">
      <div className="gap-x-[8px] gap-y-[4px] grid grid-cols-[__minmax(0,2fr)_minmax(0,1fr)] grid-rows-[repeat(1,fit-content(100%))] p-[8px] relative w-full">
        <div className="bg-white col-1 content-stretch flex h-[4px] items-start justify-between justify-self-stretch min-w-[8px] overflow-clip relative rounded-[9999px] row-1 shrink-0" data-name="Indicator-alt">
          <div className="bg-white h-[4px] rounded-[9999px] shrink-0 w-[28px]" data-name="Indicator-alt" />
          <div className="bg-white h-[4px] rounded-[9999px] shrink-0 w-[28px]" data-name="Indicator-alt" />
        </div>
        <div className="bg-[#a7acb5] col-2 h-[4px] justify-self-stretch rounded-[9999px] row-1 shrink-0" data-name="Indicator-alt" />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex inset-[-0.14%_0] items-end justify-center p-[8px]" data-name="Navigation">
      <Area />
    </div>
  );
}

function Gallery() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="Gallery">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGallery} />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="media">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMedia} />
      </div>
      <Navigation />
    </div>
  );
}

function Media1() {
  return (
    <div className="content-stretch flex h-[260px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="media">
      <Gallery />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start max-h-[56px] min-h-px min-w-[220px] relative" data-name="content">
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-[178px] relative text-[#1b5eb2] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[28px]">Завтрак континентальный</p>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="content">
      <div className="content-start flex flex-wrap gap-y-[4px] items-start justify-end relative shrink-0 w-full" data-name="Title H4">
        <Content10 />
      </div>
      <div className="content-start flex flex-wrap gap-[12px] items-start py-[8px] relative shrink-0" data-name="Property">
        <div className="content-stretch flex gap-[8px] items-center relative rounded-[4px] shrink-0" data-name="Item 1">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="bfic_people_24*24">
            <div className="absolute inset-[12.5%_4.38%_16.67%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5002 11.3333">
                <g id="Vector">
                  <path d={svgPaths.p2aeb5f80} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p224e0500} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p1a4bd0b0} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p2296c980} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p1b63bc00} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p1c68b200} fill="var(--fill-0, #8D929B)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2e3236] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
            <p className="leading-[16px]">для 3 гостей</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative rounded-[4px] shrink-0" data-name="Item 2">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="bfic_time_24*24">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p166a5670} fill="var(--fill-0, #8D929B)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2e3236] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
            <p className="leading-[16px]">на 6 дней</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[12px] px-[20px] relative w-full">
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function ontent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="сontent">
      <Media1 />
      <Body />
    </div>
  );
}

function FinalPrice() {
  return (
    <div className="content-stretch flex font-['Noto_Sans:Display_SemiBold',sans-serif] gap-[2px] items-end leading-[0] overflow-clip relative shrink-0 text-[#2e3236] text-[20px] tracking-[-0.5px] whitespace-nowrap" data-name="Final price">
      <div className="flex flex-col font-semibold justify-end relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[28px]">7 700</p>
      </div>
      <div className="flex flex-col font-normal justify-center relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[28px]">₽</p>
      </div>
    </div>
  );
}

function Base() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-name="Base">
      <FinalPrice />
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Under">
        <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#2e3236] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          3 гостя / 6 дней
        </p>
      </div>
    </div>
  );
}

function FullPrice() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Full Price">
      <Base />
    </div>
  );
}

function PriceLinkMotivating() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Price + link-motivating">
      <FullPrice />
    </div>
  );
}

function String() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="String 2">
      <PriceLinkMotivating />
      <div className="bg-gradient-to-t content-stretch flex from-[#1b5eb2] items-center justify-center min-h-[40px] min-w-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 to-[#1251a0]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#1b5eb2] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ai_plus_24">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path clipRule="evenodd" d={svgPaths.p147e1300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.2)]" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-end flex flex-wrap items-end justify-center pb-[20px] pt-[12px] px-[20px] relative w-full">
          <String />
        </div>
      </div>
    </div>
  );
}

function Area1() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="area">
      <div className="gap-x-[8px] gap-y-[4px] grid grid-cols-[____minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[repeat(1,fit-content(100%))] p-[8px] relative w-full">
        <div className="bg-white col-1 content-stretch flex h-[4px] items-start justify-between justify-self-stretch min-w-[8px] overflow-clip relative rounded-[9999px] row-1 shrink-0" data-name="Indicator-alt">
          <div className="bg-white h-[4px] rounded-[9999px] shrink-0 w-[28px]" data-name="Indicator-alt" />
          <div className="bg-white h-[4px] rounded-[9999px] shrink-0 w-[28px]" data-name="Indicator-alt" />
        </div>
        <div className="bg-[#a7acb5] col-2 h-[4px] justify-self-stretch rounded-[9999px] row-1 shrink-0" data-name="Indicator-alt" />
        <div className="bg-[#a7acb5] col-3 h-[4px] justify-self-stretch rounded-[9999px] row-1 shrink-0" data-name="Indicator-alt" />
        <div className="bg-[#a7acb5] col-4 h-[4px] justify-self-stretch rounded-[9999px] row-1 shrink-0" data-name="Indicator-alt" />
      </div>
    </div>
  );
}

function Media2() {
  return (
    <div className="content-stretch flex h-[260px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="media">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-full items-start min-h-px min-w-px overflow-clip relative" data-name="Gallery">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGallery1} />
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="media">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMedia1} />
        </div>
        <div className="absolute content-stretch flex inset-[-0.14%_0] items-end justify-center p-[8px]" data-name="Navigation">
          <Area1 />
        </div>
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start max-h-[56px] min-h-px min-w-[220px] relative" data-name="content">
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-[178px] relative text-[#1b5eb2] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[28px]">Аренда банного комплекса</p>
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="content">
      <div className="content-start flex flex-wrap gap-y-[4px] items-start justify-end relative shrink-0 w-full" data-name="Title H4">
        <Content12 />
      </div>
      <div className="content-start flex flex-wrap gap-[12px] items-start py-[8px] relative shrink-0" data-name="Property">
        <div className="content-stretch flex gap-[8px] items-center relative rounded-[4px] shrink-0" data-name="Item 1">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="bfic_people_24*24">
            <div className="absolute inset-[12.5%_4.38%_16.67%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5002 11.3333">
                <g id="Vector">
                  <path d={svgPaths.p2aeb5f80} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p224e0500} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p1a4bd0b0} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p2296c980} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p1b63bc00} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p1c68b200} fill="var(--fill-0, #8D929B)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2e3236] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
            <p className="leading-[16px]">для 4 гостей</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative rounded-[4px] shrink-0" data-name="Item 2">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="bfic_time_24*24">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p166a5670} fill="var(--fill-0, #8D929B)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2e3236] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
            <p className="leading-[16px]">от 2 часов</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[12px] px-[20px] relative w-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function ontent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="сontent">
      <Media2 />
      <Body1 />
    </div>
  );
}

function FinalPrice1() {
  return (
    <div className="content-stretch flex font-['Noto_Sans:Display_SemiBold',sans-serif] gap-[2px] items-end leading-[0] overflow-clip relative shrink-0 text-[20px] tracking-[-0.5px]" data-name="Final price">
      <div className="flex flex-col font-semibold justify-end relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[28px]">8 000</p>
      </div>
      <div className="flex flex-col font-normal justify-center relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[28px]">₽</p>
      </div>
    </div>
  );
}

function Base1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 text-[#2e3236] whitespace-nowrap" data-name="Base">
      <FinalPrice1 />
      <div className="content-stretch flex font-['Noto_Sans:Display_Regular',sans-serif] font-normal gap-[2px] items-center leading-[16px] relative shrink-0 text-[12px]" data-name="Under">
        <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          4
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          гостя /
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          2
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          часа
        </p>
      </div>
    </div>
  );
}

function FullPrice1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Full Price">
      <Base1 />
    </div>
  );
}

function PriceLinkMotivating1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Price + link-motivating">
      <FullPrice1 />
    </div>
  );
}

function String1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="String 2">
      <PriceLinkMotivating1 />
      <div className="bg-gradient-to-t content-stretch flex from-[#1b5eb2] items-center justify-center min-h-[40px] min-w-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 to-[#1251a0]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#1b5eb2] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ai_plus_24">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path clipRule="evenodd" d={svgPaths.p147e1300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.2)]" />
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-end flex flex-wrap items-end justify-center pb-[20px] pt-[12px] px-[20px] relative w-full">
          <String1 />
        </div>
      </div>
    </div>
  );
}

function Area2() {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-name="area">
      <div className="gap-x-[8px] gap-y-[4px] grid grid-cols-[____minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[repeat(1,fit-content(100%))] p-[8px] relative w-full">
        <div className="bg-white col-1 content-stretch flex h-[4px] items-start justify-between justify-self-stretch min-w-[8px] overflow-clip relative rounded-[9999px] row-1 shrink-0" data-name="Indicator-alt">
          <div className="bg-white h-[4px] rounded-[9999px] shrink-0 w-[28px]" data-name="Indicator-alt" />
          <div className="bg-white h-[4px] rounded-[9999px] shrink-0 w-[28px]" data-name="Indicator-alt" />
        </div>
        <div className="bg-[#a7acb5] col-2 h-[4px] justify-self-stretch rounded-[9999px] row-1 shrink-0" data-name="Indicator-alt" />
        <div className="bg-[#a7acb5] col-3 h-[4px] justify-self-stretch rounded-[9999px] row-1 shrink-0" data-name="Indicator-alt" />
        <div className="bg-[#a7acb5] col-4 h-[4px] justify-self-stretch rounded-[9999px] row-1 shrink-0" data-name="Indicator-alt" />
      </div>
    </div>
  );
}

function Media3() {
  return (
    <div className="content-stretch flex h-[260px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="media">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="Gallery">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGallery} />
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="media">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGallery} />
        </div>
        <div className="absolute content-stretch flex inset-[-0.14%_0] items-end justify-center p-[8px]" data-name="Navigation">
          <Area2 />
        </div>
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start max-h-[56px] min-h-px min-w-[220px] relative" data-name="content">
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-[178px] relative text-[#1b5eb2] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[28px]">{`Спа программа для тела "Турецкий шарм"`}</p>
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="content">
      <div className="content-start flex flex-wrap gap-y-[4px] items-start justify-end relative shrink-0 w-full" data-name="Title H4">
        <Content14 />
      </div>
      <div className="content-start flex flex-wrap gap-[12px] items-start py-[8px] relative shrink-0" data-name="Property">
        <div className="content-stretch flex gap-[8px] items-center relative rounded-[4px] shrink-0" data-name="Item 1">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="bfic_people_24*24">
            <div className="absolute inset-[12.5%_4.38%_16.67%_5%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5002 11.3333">
                <g id="Vector">
                  <path d={svgPaths.p2aeb5f80} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p224e0500} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p1a4bd0b0} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p2296c980} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p1b63bc00} fill="var(--fill-0, #8D929B)" />
                  <path d={svgPaths.p1c68b200} fill="var(--fill-0, #8D929B)" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2e3236] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
            <p className="leading-[16px]">для 4 гостей</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative rounded-[4px] shrink-0" data-name="Item 2">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="bfic_time_24*24">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p166a5670} fill="var(--fill-0, #8D929B)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2e3236] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
            <p className="leading-[16px]">от 2 часов</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body2() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[12px] px-[20px] relative w-full">
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function ontent2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="сontent">
      <Media3 />
      <Body2 />
    </div>
  );
}

function FinalPrice2() {
  return (
    <div className="content-stretch flex font-['Noto_Sans:Display_SemiBold',sans-serif] gap-[2px] items-end leading-[0] overflow-clip relative shrink-0 text-[20px] tracking-[-0.5px]" data-name="Final price">
      <div className="flex flex-col font-semibold justify-end relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[28px]">6 500</p>
      </div>
      <div className="flex flex-col font-normal justify-center relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[28px]">₽</p>
      </div>
    </div>
  );
}

function Base2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 text-[#2e3236] whitespace-nowrap" data-name="Base">
      <FinalPrice2 />
      <div className="content-stretch flex font-['Noto_Sans:Display_Regular',sans-serif] font-normal gap-[2px] items-center leading-[16px] relative shrink-0 text-[12px]" data-name="Under">
        <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          4
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          гостя /
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          2
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          часа
        </p>
      </div>
    </div>
  );
}

function FullPrice2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Full Price">
      <Base2 />
    </div>
  );
}

function PriceLinkMotivating2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Price + link-motivating">
      <FullPrice2 />
    </div>
  );
}

function String2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="String 2">
      <PriceLinkMotivating2 />
      <div className="bg-gradient-to-t content-stretch flex from-[#1b5eb2] items-center justify-center min-h-[40px] min-w-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 to-[#1251a0]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#1b5eb2] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ai_plus_24">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path clipRule="evenodd" d={svgPaths.p147e1300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.2)]" />
      </div>
    </div>
  );
}

function Footer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-end flex flex-wrap items-end justify-center pb-[20px] pt-[12px] px-[20px] relative w-full">
          <String2 />
        </div>
      </div>
    </div>
  );
}

function Media4() {
  return (
    <div className="content-stretch flex h-[260px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="media">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="Gallery">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGallery} />
        <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="media">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMedia2} />
        </div>
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start max-h-[56px] min-h-px min-w-[220px] relative" data-name="content">
      <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-[178px] relative text-[#1b5eb2] text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
        <p className="leading-[28px]">Посещение подогреваемых бассейнов</p>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="content">
      <div className="content-start flex flex-wrap gap-y-[4px] items-start justify-end relative shrink-0 w-full" data-name="Title H4">
        <Content16 />
      </div>
    </div>
  );
}

function Body3() {
  return (
    <div className="relative shrink-0 w-full" data-name="body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pt-[12px] px-[20px] relative w-full">
          <Content15 />
        </div>
      </div>
    </div>
  );
}

function ontent3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="сontent">
      <Media4 />
      <Body3 />
    </div>
  );
}

function FinalPrice3() {
  return (
    <div className="content-stretch flex gap-[2px] items-end leading-[0] overflow-clip relative shrink-0" data-name="Final price">
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-full justify-center relative shrink-0 text-[12px] w-[12px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[16px]">от</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-end relative shrink-0 text-[20px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[28px]">500</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-normal justify-center relative shrink-0 text-[20px] tracking-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[28px]">₽</p>
      </div>
    </div>
  );
}

function Base3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 text-[#2e3236]" data-name="Base">
      <FinalPrice3 />
      <div className="content-stretch flex font-['Noto_Sans:Display_Regular',sans-serif] font-normal gap-[2px] items-center leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap" data-name="Under">
        <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          1
        </p>
        <p className="relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          гость
        </p>
      </div>
    </div>
  );
}

function FullPrice3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Full Price">
      <Base3 />
    </div>
  );
}

function PriceLinkMotivating3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0" data-name="Price + link-motivating">
      <FullPrice3 />
    </div>
  );
}

function String3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="String 2">
      <PriceLinkMotivating3 />
      <div className="bg-gradient-to-t content-stretch flex from-[#1b5eb2] items-center justify-center min-h-[40px] min-w-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 to-[#1251a0]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#1b5eb2] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="ai_plus_24">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path clipRule="evenodd" d={svgPaths.p147e1300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_3px_0px_rgba(255,255,255,0.2)]" />
      </div>
    </div>
  );
}

function Footer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-end flex flex-wrap items-end justify-center pb-[20px] pt-[12px] px-[20px] relative w-full">
          <String3 />
        </div>
      </div>
    </div>
  );
}

function GardsGrid() {
  return (
    <div className="content-start flex flex-wrap gap-[20px] items-start relative shrink-0 w-full" data-name="Gards grid">
      <div className="bg-[#f9fafb] flex-[1_0_0] h-[376px] min-h-px min-w-[260px] relative rounded-[8px]" data-name="Card_E">
        <div className="content-stretch flex flex-col items-start justify-between min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <ontent />
          <Footer />
        </div>
        <div aria-hidden="true" className="absolute border border-[#c3c8cf] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
      <div className="bg-[#f9fafb] flex-[1_0_0] h-[376px] min-h-px min-w-[260px] relative rounded-[8px]" data-name="Card_B">
        <div className="content-stretch flex flex-col items-start justify-between min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <ontent1 />
          <Footer1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#c3c8cf] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
      <div className="bg-[#f9fafb] flex-[1_0_0] h-[376px] min-h-px min-w-[260px] relative rounded-[8px]" data-name="Card_S">
        <div className="content-stretch flex flex-col items-start justify-between min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <ontent2 />
          <Footer2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#c3c8cf] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
      <div className="bg-[#f9fafb] flex-[1_0_0] h-[376px] min-h-px min-w-[260px] relative rounded-[8px]" data-name="Card_W">
        <div className="content-stretch flex flex-col items-start justify-between min-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
          <ontent3 />
          <Footer3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#c3c8cf] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[593px]" data-name="Content">
      <RoomCategoryCard />
      <GardsGrid />
    </div>
  );
}

function Title() {
  return (
    <div className="bg-[#f9fafb] relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[20px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#2e3236] text-[20px] w-[236px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 100" }}>
            <p className="leading-[28px]">Ваше бронирование</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DN() {
  return (
    <div className="bg-[#e8f2ff] relative shrink-0 w-full" data-name="d&n">
      <div className="content-stretch flex items-start justify-between px-[20px] py-[9px] relative w-full">
        <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] min-h-px min-w-px relative text-[#2e3236] text-[12px] tracking-[-0.5px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
          <p className="leading-[16px]">4 ночи, 2 гостя</p>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 text-[#2e3236] tracking-[-0.5px]" data-name="text">
      <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-end relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[28px]">{`16 `}</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-end relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[24px]">апреля</p>
      </div>
    </div>
  );
}

function Arrival() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="arrival">
      <Text3 />
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#737880] text-[12px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[16px]">Понедельник</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#737880] text-[12px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[16px]">с 14:00</p>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[15px]" data-name="-">
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#737880] text-[15px] w-full">
        <p className="leading-[15px]">—</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0 text-[#2e3236] tracking-[-0.5px]" data-name="text">
      <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-end relative shrink-0 text-[20px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[28px]">{`22 `}</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-end relative shrink-0 text-[16px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[24px]">апреля</p>
      </div>
    </div>
  );
}

function Arrival1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="arrival">
      <Text4 />
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#737880] text-[12px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[16px]">Воскресенье</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans:Display_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#737880] text-[12px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        <p className="leading-[16px]">до 12:00</p>
      </div>
    </div>
  );
}

function Date() {
  return (
    <div className="relative shrink-0 w-full" data-name="Date">
      <div className="content-stretch flex items-start justify-between pb-[16px] pt-[8px] px-[20px] relative w-full">
        <Arrival />
        <Component />
        <Arrival1 />
      </div>
    </div>
  );
}

function NameRoom() {
  return (
    <div className="content-stretch flex gap-[2px] items-end relative shrink-0 w-full" data-name="Name room">
      <p className="flex-[1_0_0] font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold leading-[20px] min-h-px min-w-px relative text-[#1b5eb2] text-[14px] tracking-[-0.5px]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        Стандарт с двуспальной кроватью
      </p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="bfic_arrow-up_24*24">
        <div className="absolute inset-[33.33%_20.83%_31.25%_20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 5.66667">
            <path clipRule="evenodd" d={svgPaths.p2bd0d100} fill="var(--fill-0, #1B5EB2)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3px] items-start justify-end min-h-px min-w-px relative" data-name="Text">
      <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#2e3236] text-[14px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        Номер:
      </p>
      <NameRoom />
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[2px] items-center leading-[24px] relative shrink-0 text-[#2e3236] text-[16px] text-right tracking-[-0.5px] whitespace-nowrap" data-name="price">
      <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        96 800
      </p>
      <p className="font-['Noto_Sans:Display_Regular',sans-serif] font-normal relative shrink-0" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        ₽
      </p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex gap-[2px] items-end justify-end leading-[0] relative shrink-0 text-right whitespace-nowrap" data-name="price">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-end not-italic relative shrink-0 text-[#2e3236]">
        <p className="leading-[16px]">42 400</p>
      </div>
      <div className="flex flex-col font-['Arial:Regular','Noto_Sans:Regular',sans-serif] justify-end relative shrink-0 text-[#737880]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[16px]">₽</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 text-[12px] w-full" data-name="item">
      <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#737880]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        Тариф весенний
      </p>
      <Price1 />
    </div>
  );
}

function Line() {
  return (
    <div className="bg-[#c3c8cf] h-px relative rounded-[1px] shrink-0 w-full" data-name="Line">
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Sep() {
  return (
    <div className="h-px relative rounded-[1px] shrink-0 w-full" data-name="Sep">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <Line />
        </div>
      </div>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex gap-[2px] items-end justify-end leading-[0] relative shrink-0 text-right whitespace-nowrap" data-name="price">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-end not-italic relative shrink-0 text-[#2e3236]">
        <p className="leading-[16px]">42 400</p>
      </div>
      <div className="flex flex-col font-['Arial:Regular','Noto_Sans:Regular',sans-serif] justify-end relative shrink-0 text-[#737880]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[16px]">₽</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 text-[12px] w-full" data-name="item">
      <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#737880]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        Тариф весенний
      </p>
      <Price2 />
    </div>
  );
}

function Line1() {
  return (
    <div className="bg-[#c3c8cf] h-px relative rounded-[1px] shrink-0 w-full" data-name="Line">
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Sep1() {
  return (
    <div className="h-px relative rounded-[1px] shrink-0 w-full" data-name="Sep">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <Line1 />
        </div>
      </div>
    </div>
  );
}

function Price3() {
  return (
    <div className="content-stretch flex gap-[2px] items-end justify-end leading-[0] relative shrink-0 text-right whitespace-nowrap" data-name="price">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-end not-italic relative shrink-0 text-[#2e3236]">
        <p className="leading-[16px]">12 000</p>
      </div>
      <div className="flex flex-col font-['Arial:Regular','Noto_Sans:Regular',sans-serif] justify-end relative shrink-0 text-[#737880]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[16px]">₽</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 text-[12px] w-full" data-name="item">
      <p className="flex-[1_0_0] font-['Noto_Sans:Display_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#737880]" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
        Тариф весенний
      </p>
      <Price3 />
    </div>
  );
}

function Line2() {
  return (
    <div className="bg-[#c3c8cf] h-px relative rounded-[1px] shrink-0 w-full" data-name="Line">
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Sep2() {
  return (
    <div className="content-stretch flex flex-col h-px items-center overflow-clip relative rounded-[1px] shrink-0 w-full" data-name="Sep">
      <Line2 />
    </div>
  );
}

function Price4() {
  return (
    <div className="content-stretch flex gap-[2px] items-end justify-center relative shrink-0 text-[28px] text-right" data-name="price">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-end not-italic relative shrink-0 text-[#2e3236]">
        <p className="leading-[36px]">96 800</p>
      </div>
      <div className="flex flex-col font-['Arial:Regular','Noto_Sans:Regular',sans-serif] justify-end relative shrink-0 text-[#737880]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="leading-[36px]">₽</p>
      </div>
    </div>
  );
}

function R() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end leading-[0] min-h-px min-w-px relative whitespace-nowrap" data-name="R">
      <Price4 />
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[#2e3236] text-[10.8px]">
        <p className="leading-[12px]">Налоги и сборы включены</p>
      </div>
    </div>
  );
}

function BePaid() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="be paid">
      <R />
    </div>
  );
}

function Total() {
  return (
    <div className="relative shrink-0 w-full" data-name="Total">
      <div className="flex flex-col items-end justify-end size-full">
        <div className="content-stretch flex flex-col items-end justify-end pt-[12px] px-[20px] relative w-full">
          <BePaid />
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="relative shrink-0 w-full" data-name="CTA">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <div className="bg-gradient-to-r from-[#1b5eb2] min-h-[48px] min-w-[48px] relative rounded-[4px] shrink-0 to-[#1b5eb2] w-full" data-name="Button">
          <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] px-[16px] py-[12px] relative w-full">
              <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Lable">
                <div className="flex flex-col font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
                  <p className="leading-[24px]">Продолжить</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppingCard() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[6px] shrink-0 w-[283px]" data-name="Shopping card">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Title />
        <DN />
        <Date />
        <div className="bg-[#e8f2ff] relative shrink-0 w-[283px]" data-name="Rm">
          <div className="content-stretch flex items-start justify-between overflow-clip px-[20px] py-[8px] relative rounded-[inherit] w-full">
            <Text5 />
            <Price />
          </div>
          <div aria-hidden="true" className="absolute border-[#b3c9e8] border-b border-solid border-t inset-0 pointer-events-none" />
        </div>
        <div className="relative shrink-0 w-[283px]" data-name="gst 3">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-end overflow-clip px-[20px] py-[12px] relative rounded-[inherit] w-full">
            <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#2e3236] text-[14px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
              1 взрослый на основном месте
            </p>
            <Item />
          </div>
          <div aria-hidden="true" className="absolute border-0 border-[#eff1f4] border-dashed inset-0 pointer-events-none" />
        </div>
        <Sep />
        <div className="relative shrink-0 w-[283px]" data-name="gst 4">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-end overflow-clip px-[20px] py-[12px] relative rounded-[inherit] w-full">
            <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#2e3236] text-[14px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
              2 взрослый на основном месте
            </p>
            <Item1 />
          </div>
          <div aria-hidden="true" className="absolute border-0 border-[#eff1f4] border-dashed inset-0 pointer-events-none" />
        </div>
        <Sep1 />
        <div className="relative shrink-0 w-[283px]" data-name="gst 5">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-end overflow-clip px-[20px] py-[12px] relative rounded-[inherit] w-full">
            <p className="font-['Noto_Sans:Display_SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#2e3236] text-[14px] tracking-[-0.5px] w-full" style={{ fontVariationSettings: "'CTGR' 100, 'wdth' 90" }}>
              1 ребенок на дополнительном месте
            </p>
            <Item2 />
          </div>
          <div aria-hidden="true" className="absolute border-0 border-[#eff1f4] border-dashed inset-0 pointer-events-none" />
        </div>
        <Sep2 />
        <Total />
        <Cta />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c3c8cf] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Area3() {
  return (
    <div className="content-stretch flex flex-col h-[1257px] items-start shrink-0 sticky top-0 w-[283px]" data-name="Area">
      <ShoppingCard />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex gap-[24px] items-start p-[30px] relative w-full">
        <Content4 />
        <Area3 />
      </div>
    </div>
  );
}

export default function Iframe() {
  return (
    <div className="bg-[#e4e8ed] content-stretch flex flex-col items-end relative size-full" data-name="Iframe">
      <Header />
      <Progressbar />
      <Content3 />
    </div>
  );
}