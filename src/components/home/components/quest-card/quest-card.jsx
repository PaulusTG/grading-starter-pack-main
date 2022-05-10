import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quest-card.styled';

const QuestCard = (quest) => {
  console.log(quest.id);
  const { id, title, previewImg, peopleCount, level } = quest;

  return <S.QuestItem>
    <S.QuestItemLink to={`/quest/${id}`}>
      <S.Quest>
        <S.QuestImage
          src={previewImg}
          width="344"
          height="232"
          alt={`квест ${title}`}
        />

        <S.QuestContent>
          <S.QuestTitle>{title}</S.QuestTitle>

          <S.QuestFeatures>
            <S.QuestFeatureItem>
              <IconPerson />
              {`${peopleCount} чел`}
            </S.QuestFeatureItem>
            <S.QuestFeatureItem>
              <IconPuzzle />
              {level}
            </S.QuestFeatureItem>
          </S.QuestFeatures>
        </S.QuestContent>
      </S.Quest>
    </S.QuestItemLink>
  </S.QuestItem>;
};

export default QuestCard;
